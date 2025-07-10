const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Safety information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cancellation options
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Community</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Diversity & Belonging
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  HomeBase Associates
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Hosting</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Host your home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Host an experience
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Responsible hosting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">About</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Learn about new features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 HomeBase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
