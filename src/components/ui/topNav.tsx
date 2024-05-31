import ProfileBadge from "@/components/ui/profileBadge";

function TopNav() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <ProfileBadge></ProfileBadge>
    </header>
  );
}

export default TopNav;
