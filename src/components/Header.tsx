import Logo from "./Logo";

export default function Header() {
  return (
    <div className="flex items-center justify-around h-[84px]">
      <Logo />
      <nav className="w-[488px] h-[24px]">
        <ul className="text-gray-900 font-family-[Inter]   text-[16px] flex justify-between">
          <li className="font-medium">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="">Service</a>
          </li>
          <li>
            <a href="">Feature</a>
          </li>
          <li>
            <a href="">Product</a>
          </li>
          <li>
            <a href="">Testimonial</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
      </nav>
      <div className="authen text-sm flex gap-[14px]">
        <button >
            <span className="text-[#4CAF4F] inline-block pt-[10px] pb-[10px] pr-[20px] pl-[20px] ">Login</span>
        </button>
        <button className="">
            <span className="text-white inline-block bg-[#4CAF4F] pt-[10px] pb-[10px] pr-[20px] pl-[20px] rounded-[6px]">Sign up</span>
        </button>
      </div>
    </div>
  );
}
