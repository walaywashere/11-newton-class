/**
 * Performance monitoring utilities for the Class 11-Newton website
 */

class PerformanceMonitor {
  constructor() {
    this.marks = new Map();
    this.measures = new Map();
  }

  /**
   * Start timing an operation
   * @param {string} name - Name of the operation
   */
  startTiming(name) {
    if (typeof performance !== 'undefined' && performance.mark) {
      const markName = `${name}-start`;
      performance.mark(markName);
      this.marks.set(name, { start: markName, startTime: Date.now() });
    }
  }

  /**
   * End timing an operation
   * @param {string} name - Name of the operation
   * @returns {number|null} Duration in milliseconds
   */
  endTiming(name) {
    if (typeof performance !== 'undefined' && performance.mark && this.marks.has(name)) {
      const markData = this.marks.get(name);
      const endMarkName = `${name}-end`;
      const measureName = `${name}-duration`;

      performance.mark(endMarkName);
      performance.measure(measureName, markData.start, endMarkName);

      const measure = performance.getEntriesByName(measureName)[0];
      const duration = measure ? measure.duration : Date.now() - markData.startTime;

      this.measures.set(name, duration);
      
      // Clean up marks
      performance.clearMarks(markData.start);
      performance.clearMarks(endMarkName);
      performance.clearMeasures(measureName);
      
      this.marks.delete(name);
      
      // Log if duration is concerning (development only)
      if (import.meta.env.DEV && duration > 1000) {
        console.warn(`⚠️ Slow operation detected: ${name} took ${duration.toFixed(2)}ms`);
      }

      return duration;
    }
    return null;
  }

  /**
   * Get all recorded measures
   * @returns {Object} Object with operation names as keys and durations as values
   */
  getMeasures() {
    return Object.fromEntries(this.measures);
  }

  /**
   * Log performance summary to console (development only)
   */
  logSummary() {
    if (import.meta.env.DEV) {
      const measures = this.getMeasures();
      if (Object.keys(measures).length > 0) {
                 console.warn('📊 Performance Summary');
         Object.entries(measures).forEach(([name, duration]) => {
           const status = duration > 1000 ? 'SLOW' : duration > 500 ? 'MODERATE' : 'FAST';
           console.warn(`${name}: ${duration.toFixed(2)}ms (${status})`);
         });
         console.warn('End Performance Summary');
      }
    }
  }

  /**
   * Measure React component render time
   * @param {string} componentName - Name of the component
   * @param {Function} renderFn - Function that renders the component
   * @returns {any} Result of the render function
   */
  measureComponentRender(componentName, renderFn) {
    this.startTiming(`render-${componentName}`);
    const result = renderFn();
    this.endTiming(`render-${componentName}`);
    return result;
  }
}

// Create a singleton instance
const performanceMonitor = new PerformanceMonitor();

/**
 * Higher-order component to measure component render performance
 * @param {React.Component} WrappedComponent - Component to wrap
 * @param {string} componentName - Name for logging
 * @returns {React.Component} Wrapped component
 */
export const withPerformanceMonitoring = (WrappedComponent, componentName) => {
  return function PerformanceWrappedComponent(props) {
    if (import.meta.env.DEV) {
      return performanceMonitor.measureComponentRender(componentName, () => (
        <WrappedComponent {...props} />
      ));
    }
    return <WrappedComponent {...props} />;
  };
};

/**
 * Hook to measure operation performance
 * @param {string} operationName - Name of the operation
 * @returns {Object} Object with start and end timing functions
 */
export const usePerformanceTiming = (operationName) => {
  const start = () => performanceMonitor.startTiming(operationName);
  const end = () => performanceMonitor.endTiming(operationName);
  
  return { start, end };
};

/**
 * Measure image loading performance
 * @param {string} imageSrc - Source URL of the image
 * @param {string} imageId - Identifier for the image
 * @returns {Promise<number>} Promise that resolves with load time in ms
 */
export const measureImageLoad = (imageSrc, imageId = 'image') => {
  return new Promise((resolve) => {
    const startTime = Date.now();
    const img = new Image();
    
    img.onload = () => {
      const loadTime = Date.now() - startTime;
      if (import.meta.env.DEV && loadTime > 2000) {
        console.warn(`🖼️ Slow image load: ${imageId} took ${loadTime}ms to load`);
      }
      resolve(loadTime);
    };
    
    img.onerror = () => {
      const loadTime = Date.now() - startTime;
      console.error(`❌ Image failed to load: ${imageId} (${loadTime}ms)`);
      resolve(loadTime);
    };
    
    img.src = imageSrc;
  });
};

export default performanceMonitor;