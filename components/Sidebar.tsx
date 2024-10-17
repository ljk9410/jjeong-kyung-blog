import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export default function Sidebar() {
  const categories = ['기술', '일상', '리뷰', '여행'];

  return (
    <aside className="w-64 h-full overflow-y-auto border-r p-4">
      <div className="space-y-8">
        <div className="text-center">
          <Image
            src="/profile.jpg"
            alt="프로필 사진"
            width={120}
            height={120}
            className="rounded-full mx-auto"
          />
          <h2 className="mt-4 text-xl font-semibold">블로그 주인</h2>
          <p className="text-sm text-muted-foreground">프로그래머 | 여행자</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">카테고리</h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <Link href={`/category/${category}`} className="hover:underline">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">글 검색</h3>
          <div className="flex">
            <Input placeholder="검색어 입력..." className="mr-2" />
            <Button size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}