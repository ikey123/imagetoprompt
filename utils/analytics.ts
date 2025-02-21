export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    // 暂时只打印日志，后续可以集成具体的分析工具
    console.log('Track:', eventName, properties);
  }
};

export const pageView = (url: string) => {
  trackEvent('page_view', { url });
}; 