function VerifyLogin() {
  return (
    <form action={(formData) => formAction(formData)}>
      <div>
        <h2>Login or Create account</h2>

        <p className="text-red-500">{state?.message}</p>
        <p className="text-red-500">{state?.errors}</p>

        <input
          placeholder="example@email.com"
          className=" border border-primary-400 rounded-sm py-3 px-3"
          name="email"
        />
        <button className="rounded-md bg-blue-500 py-3 px-3 cursor-pointer">
          Continue
        </button>
      </div>
    </form>
  );
}

export default VerifyLogin;
