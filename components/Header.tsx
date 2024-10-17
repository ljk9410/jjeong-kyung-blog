import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
	return (
		<header className="bg-background border-b sticky top-0 z-50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold">
					쩡경의 블로그
				</Link>
				<nav>
					<ul className="flex space-x-4 items-center">
						<li>
							<Link href="/" className="hover:underline">
								홈
							</Link>
						</li>
						<li>
							<ThemeToggle />
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
