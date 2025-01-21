import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
  MenubarSeparator,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarCheckboxItem,
} from "@/components/ui/menubar";
import { BadgeAlert } from "lucide-react";

const menus = [
  {
    label: "Home",
    items: [
      { label: "Dashboard" },
      { label: "Activity" },
      { label: "Stats" },
    ],
  },
  {
    label: "About",
    items: [
      { label: "Company" },
      { label: "Team" },
      { label: "Careers" },
    ],
  },
  {
    label: "Services",
    items: [
      {
        label: "Web Development",
        subItems: [
          { label: "Frontend" },
          { label: "Backend" },
          { label: "Full Stack" },
        ],
      },
      { separator: true },
      { label: "Mobile Development" },
      { label: "UI/UX Design" },
    ],
  },
  {
    label: "Contact",
    items: [
      { label: "Email" },
      { label: "Phone" },
      { label: "Address" },
    ],
  },
  {
    label: "Settings",
    items: [
      { type: "checkbox", label: "Dark Mode" },
      { type: "checkbox", label: "Notifications" },
      { separator: true },
      {
        type: "radio",
        group: "Language",
        value: "English",
        options: ["English", "Spanish", "French"],
      },
    ],
  },
];

export function NavbarOptions() {
  const renderMenuItems = (items: Record<string, any>[]) => {
    return items.map((item, index) => {
      if (item.separator) {
        return <MenubarSeparator key={`separator-${index}`} className="border-green-300" />;
      }
      if (item.subItems) {
        return (
          <MenubarSub key={item.label}>
            <MenubarSubTrigger className="hover:bg-green-600 px-4 py-2">
              {item.label}
            </MenubarSubTrigger>
            <MenubarSubContent className="bg-green-500 text-white shadow-md">
              {renderMenuItems(item.subItems)}
            </MenubarSubContent>
          </MenubarSub>
        );
      }
      if (item.type === "checkbox") {
        return (
          <MenubarCheckboxItem key={item.label} className="hover:bg-green-600 px-4 py-2">
            {item.label}
          </MenubarCheckboxItem>
        );
      }
      if (item.type === "radio") {
        return (
          <MenubarRadioGroup key={item.group} value={item.value}>
            {item.options.map((option: string) => (
              <MenubarRadioItem
                key={option}
                value={option}
                className="hover:bg-green-600 px-4 py-2"
              >
                {option}
              </MenubarRadioItem>
            ))}
          </MenubarRadioGroup>
        );
      }
      return (
        <MenubarItem key={item.label} className="hover:bg-green-600 px-4 py-2">
          {item.label}
        </MenubarItem>
      );
    });
  };

  return (
    <nav className="bg-green-500 text-white shadow-md w-full al">
      <div className="container mx-auto px-4 py-2">

        <Menubar className="bg-green-500 text-white border-none w-min flex ">
        <BadgeAlert />
          {menus.map((menu) => (
            <MenubarMenu key={menu.label}>
              <MenubarTrigger className=" hover:border-2 hover:text-black
               px-4 py-2 rounded">
                {menu.label}
              </MenubarTrigger>
              <MenubarContent className="bg-green-500 text-white shadow-md rounded">
                {renderMenuItems(menu.items)}
              </MenubarContent>
            </MenubarMenu>
          ))}
        </Menubar>
      </div>
    </nav>
  );
}
