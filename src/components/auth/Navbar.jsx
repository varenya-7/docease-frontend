import {
  Navbar,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";


export default function NavbarDark() {
  return (
    <Navbar
      variant="gradient"
      color="black"
      className="mx-auto max-w-screen-xl px-4 py-3"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-black font-serif">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          DOCEASE
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          <IconButton variant="text" >
            <Cog6ToothIcon className="h-4 w-4 text-purple-600" />
          </IconButton>
          <IconButton variant="text" >
            <BellIcon className="h-4 w-4 text-purple-600" />
          </IconButton>
                 
        </div> 
      </div>
    </Navbar>
  );
}