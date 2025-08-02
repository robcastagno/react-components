import { useRef, useState, useEffect, useCallback } from 'react';

interface VirtualScrollerProps {
  items: Array<React.JSX.Element>;
  height?: number;
  itemHeight?: number;
  buffer?: number;
}

function VirtualScroller({ items, height = 300, itemHeight = 20, buffer = 5 }: VirtualScrollerProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  
  const scrollPosRef = useRef(0);

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const newScrollTop = Math.round(containerRef.current.scrollTop);
      scrollPosRef.current = newScrollTop;
      setScrollTop(newScrollTop);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) { return; }
    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - buffer);
  const endIndex = Math.min(items.length, Math.ceil((scrollTop + height) / itemHeight) + buffer);

  const visibleItems = useCallback(({ content }: { content: Array<React.JSX.Element> }) => {
    const itemsToRender = [];
    for (let i = startIndex; i < endIndex; i++) {
      if (content[i]) {
        itemsToRender.push({ item: content[i], originalIndex: i });
      }
    }
    return itemsToRender.map(({ item, originalIndex }) => {
      const offsetY = originalIndex * itemHeight;
      return (
        <div key={originalIndex} style={{ height: `${itemHeight.toString()}px`, position: 'absolute', transform: `translateY(${offsetY.toString()}px)`, top: `${startIndex.toString()}px`, width: '100%' }}>
          {item}
        </div>
      );
    });
  }, [startIndex, endIndex, itemHeight]);

  return (
      <div ref={containerRef} style={{ height: `${height.toString()}px`, overflowY: 'auto', position: 'relative' }}>
        <div style={{ height: `${(items.length * itemHeight).toString()}px`, position: 'relative', paddingTop: `${(startIndex * itemHeight).toString()}px` }}>
          {visibleItems({ content: items })}
        </div>
      </div>
  );
}

export default VirtualScroller;
