import { useState } from 'react';
import DesktopHeader from '../components/home/DesktopHeader';
import MobileHeader from '../components/home/MobileHeader';
import SideMenu from '../components/home/SideMenu';
import CreatePost from '../components/home/CreatePost';
import TabNavigation from '../components/home/TabNavigation';
import Feed from '../components/home/Feed';
import MobileNavigation from '../components/home/MobileNavigation';
import UsersFeed from '../components/home/myPostsFeed';


export default function App() {
  const [activeTab, setActiveTab] = useState('following');
//   const [sideMenuOpen, setSideMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Header */}
      <div className="hidden md:block">
        <DesktopHeader />
      </div>

      {/* Mobile Header */}
      <div className="block md:hidden">
        <MobileHeader  />
      </div>

      {/* Side Menu (Mobile) */}
      {/* <SideMenu isOpen={sideMenuOpen} onClose={() => setSideMenuOpen(false)} /> */}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-4 max-w-4xl">
        <CreatePost />

        <div className="mt-6">
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <div className="mt-4">
          {activeTab === "following" ? <Feed /> : <UsersFeed/>}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <MobileNavigation />
      </div>
    </div>
  );
}
