import CustomLink from "../CustomLink";
import PlanetLogo from "../Logos/PlanetLogo";
function ConsoleButton() {
  return (
    <>
      <CustomLink
        href="/console"
        className="btn text-md justify-right border-double border-2 border-shadowed mr-2 border-teal-300 hover:border-teal-100 text-teal-200 hover:text-teal-100 hover:border-shadowed bg-gray-800"
      >
        Console
        <span className="ml-2">
          <PlanetLogo />
        </span>

      </CustomLink>
    </>
  )
}

export default ConsoleButton;