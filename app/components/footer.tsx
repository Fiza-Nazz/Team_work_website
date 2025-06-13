import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8 px-4 text-center">
      <div className="container mx-auto flex justify-between items-start flex-wrap gap-4">
        {/* Brand Section */}
        <div className="text-left">
          <p className="text-2xl font-bold leading-tight">
            MEJIWOO<br />미지우
          </p>
        </div>

        {/* Links Section */}
        <div className="flex space-x-16 text-sm">
          {/* About Us */}
          <div className="text-left">
            <p className="font-semibold mb-2">About Us</p>
            <ul className="space-y-1">
              <li>News</li>
              <li>Official Store</li>
              <li>Company</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Get Help */}
          <div className="text-left">
            <p className="font-semibold mb-2">Get Help</p>
            <ul className="space-y-1">
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Payment</li>
              <li>Return</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="text-left">
            <p className="font-semibold mb-2">Follow Us</p>
            <div className="flex space-x-2">
              <a href="https://facebook.com">
                <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
              </a>
              <a href="https://instagram.com">
                <Image src="/inst.png" alt="Instagram" width={24} height={24} />
              </a>
              <a href="https://twitter.com">
                <Image src="/x.png" alt="Twitter" width={24} height={24} />
              </a>
              <a href="https://youtube.com">
                <Image src = "/yt.png" alt="YouTube" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Links Section */}
        <div className="flex space-x-4 text-sm">
          <Link href="/guide" className="hover:underline">Guide</Link>
          <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-black text-white py-2 mt-4">
        <p className="text-sm">© 2023 MEJIWOO. All Rights Reserved</p>
      </div>
    </footer>
  );
}