import Link from 'next/link';
import CenteredLayout from '@/components/layout/CenteredLayout';

export default function Home() {
  return (
    <CenteredLayout classes="text-white text-sm font-montserrat">
      <div className="flex items-center flex-col space-y-4 tracking-tight">
        <Link href="/components/buttons/button-with-animated-arrow">
          <a>Button with animated arrow</a>
        </Link>
        <Link href="/components/progress-bar">
          <a>Progress bar</a>
        </Link>
        <Link href="/components/slider">
          <a>Slider</a>
        </Link>
      </div>
    </CenteredLayout>
  )
}
