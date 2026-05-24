import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

// 把原来使用 useSearchParams 的部分抽成一个新组件
function SearchContent() {
  const searchParams = useSearchParams();
  // ... 原来的所有逻辑代码（保持不变）
  return (
    <div>
      {/* 原来的 JSX */}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SearchContent />
    </Suspense>
  );
}
