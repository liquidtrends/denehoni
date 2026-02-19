export default function MailchimpEmbed() {
  return (
    <div id="mc_embed_shell" className="mc-shell flex justify-center">
      <div id="mc_embed_signup" className="mc-signup pt-10 w-full max-w-xl">
        <form
          action="https://denehoni.us22.list-manage.com/subscribe/post?u=bb766fbc350a103f5727e5214&id=7620d95a62&f_id=00a2c2e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
          className="w-full"
        >
          <div className="flex w-full items-stretch gap-2">
            <input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                placeholder="Your Email"
                required
                className="text-black w-full flex-1 h-12 appearance-none rounded-md border border-slate-300 bg-white px-4 text-black leading-none"
            />

            <button
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="h-11 shrink-0 appearance-none rounded-md border border-transparent bg-[#F16A2C] px-5 text-white font-semibold leading-none inline-flex items-center justify-center"
            >
                Subscribe
            </button>
            </div>
        </form>
      </div>
    </div>
  )
}
