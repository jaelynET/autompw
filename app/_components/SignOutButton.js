import { logoutAction } from "../_lib/actions";

function SignOutButton() {
  return (
    <form action={logoutAction}>
      <button className="  ">
        <h3 className="cursor-pointer w-full py-3 px-4 bg-gray-400 text-black rounded-lg font-semibold hover:bg-red-100 transition-all text-center ">
          Sign Out
        </h3>
      </button>
    </form>
  );
}
export default SignOutButton;

//  return (
//     <form action={logoutAction}>
//       <button className=" hidden group-hover:block absolute right-0 inset-y-5">
//         <h3 className="cursor-pointer  bg-amber-50">Sign Out</h3>
//       </button>
//     </form>
//   );
