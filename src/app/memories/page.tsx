"use client";
import { FlipWords } from "@/components/ui/flip-words";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";

export default function LayoutGridDemo() {
  const words = ["bb", "leidy", "chica", "silly", "lulu", "xayah", "idiota"];

  return (
    <div className="h-screen   w-full bg-black ">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="md:text-2xl text-lg font-normal text-white pl-1">
        Recuerdos o cosas q me recuerdan a mi
        <FlipWords words={words} duration={100} /> <br />
      </div>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        te amare siempre
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        por siempre!!!
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">usss</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        eres la negr ok
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Us bn racistas jjjj
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        *falla todas las r y q de pyke*
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        tu las mas cute y yo
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        casi no me veo pero ahi toy ok jjjjjj
      </p>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">us tambien ok</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        pero solo me vuelves loco tu no como sanji ok
      </p>
    </div>
  );
};

const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        foto de nojotros
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        amo jugar xayah y rakan contigo
      </p>
    </div>
  );
};

const SkeletonSeven = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">siiiii</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        como eres tan silly??
      </p>
    </div>
  );
};

const SkeletonEight = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        dibujo de us q hiciste
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        amo tus dibujos okkkkkk
      </p>
    </div>
  );
};

const SkeletonNine = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">leidy</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        simplemente tu, tu sticker
      </p>
    </div>
  );
};

const SkeletonTen = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">zeuuu</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        nuestro hijo ok. Es su mejor foto btw
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:row-span-3",
    thumbnail:
      "https://previews.dropbox.com/p/thumb/ACbcoymPegGdtxxiOS4tYaQa-bitAgBHBqnQXezBYMkx2Vubfap6WWdIjNjcTb5Q-HSrk4Qn2AKWUXSNO7oCSqCyR5C8bwxTsnmsnaX8vOIBYrPGt2SOKUDXpQG7Cr-O4RkozKsJp46_x1cwgKX7H812aI3r1t8tfJm_HFl3_qtKh_XE8vkTtsq66PcI0b8anUKElNu2WPeH0qRLk4QylD-t68YrBqVOsTz943_2zoB1_MmC9NS4f8kAuVxm2ewEPs9CU1hB7lQn9kFeydfi59MTiBA6zJkrlJeE1F7kJaAkMKHih_y0XdbP9Pug6SJQBXw/p.jpeg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "md:row-span-3",
    thumbnail:
      "https://previews.dropbox.com/p/thumb/ACYWL-57Vs0NFqstmtWaWFZwS6RIrMXuhaoudEKIcvIrp0dORwgbfJAvXHe-ZLGFaxKwj4UA5T28hRWOLhu1_nlS4yDK8uJo5y8wJxeG2ea0lUhLkcFlgwq5jctL33n7s-IjIiVjHH3SD8kacRQGghp_aGInhDXxnl1Rq9Gfjidk_GkRPKxGLBcQR12oa3BiscDYKgSiOiaXdMwaxpnz7sKyNlCU2E7wRZCJ9nUCfGqe1Y5HmgdaxMopc_YcyLpf8Blk3XeW1AmG-2D0QIOpAU7bTyVFCFVHdajPD3DXjz0WwKSpNWdGtQNWpMTa2nb5R3M/p.jpeg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "md:row-span-3",
    thumbnail:
      "https://previews.dropbox.com/p/thumb/ACZhKLv0VB7RsQ5yV5AZ84VTHDN1A2qY3y2Tfawk1UIeMA1ZN28WDeKsZ3FUw8p4i7dTUy7A1KTodxto8B4MAtoNT5FTSr8Z-xEzRVnrW0UkryqH7X5L5e3mg2_Ffgo4_CWLyTb-yutlYnfKcGOrM4z7r-H_JG3HxrColFfHNdxCTQC5WpbXJq-bVooI0mAK-z51KHUrifSk0V4E1bMBsAjhXz9shx67o-N6kxCmQ7nB-zaxghhVl8gPGEMs9J7mxuzi09OKGxKNdLvXBNNVZJj18Lk3k5C_pp6v8bGZzercNonMwtZxZDLk7LYb2zlBcNw/p.jpeg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:row-span-3",
    thumbnail:
      "https://previews.dropbox.com/p/thumb/ACaBjI5UxZYUQYouUY3Riv7Uluq5eMev8vfBr0iMhCOw9dFwyXffXVy_5C0blGCq-TKwbIXpnmk948SnbIFer6ovnjXIK_9o1c0YOw4-Ge_Y_ySrUQxJVFugIwq7QvDeSfEUETrkTaHusktwYlTVgIfb-qjg5_nQ4HfZulQ1yX465ZBVJc5gkZRjBLcbkk7SZ4Gp-zz3XI_LXzLzjKP-VnuC30XRZ0NJjx8jYpzJiWG2cc-Vpi6t5_ld8SC5GNT-1YpMc8jW5cs9nkXYENvyK0wBhHpDZDHydsmFB4kdgPA3CioEwfkPEwxIdwwSt7vCizM/p.jpeg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:row-span-3",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRgUGmNXu8YbErkedRnaGxt1bkEuoYAY9W8w&s",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:row-span-3",
    thumbnail:
      "https://previews.dropbox.com/p/thumb/ACYuBt99Ib9VqE_gNpeKgd0qGJfP4Cgy_tX11sZWafkpS2FYPbIrfJUMMXXnypxjyvSlV2NQwc433P2w8qqCDsN1q26H5dr-gKJ5whzWgWQOJqPYvdUwA6Adi0oczW-mP4uId1WWRJFidB6SWzWgJP7-pOS422Bfw-s33hM17Eon4keiZ6hET4F9jLvRWTm1-0R6lC2SvsBLrA8cSD4YO5f3MyXSOL7PGi0PuLNHb5-BSYPS2ArpxI7rLC0Ip1s20vz4mE56WctX4IX1DNIWjvVPtjueVAtQoPgk-ay2_IuU9hrL31IdXHme3RcWOKTVIv8/p.jpeg",
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "md:row-span-3",
    thumbnail:
      "https://previews.dropbox.com/p/thumb/ACaJucZketYQkBpyWwZWyAXA9-fIO9fE2XOcXhAovAKG0JLM87NvphEiAnjuT2B-dTWnzFaT4OVrwRGINh9gu6qnPN5Ji5SXeERw43F9jVT9ki52OaOtBU7cy_htPYZdyCtFTWOzGgmYK5o_rV6JvIQAatUushwYJd7x-uoqgkHoH3xOnutDazm2oIBX1xr_OKz4AawWZ2vJn7h4c6AeRfndv_SgOL2qzIzIsTN2qfRQsR6zDNtkZGsolAyZdi2ujvnbEJT-HRIfk6_ZbX2UIQcIcatHSnX881jnqdZ_Afdux5ua1nfX1QQD4EnMxY5wM4s/p.jpeg",
  },
  {
    id: 8,
    content: <SkeletonEight />,
    className: "md:row-span-3",
    thumbnail:
      "https://previews.dropbox.com/p/thumb/ACaTHL1Ehj4TOddu8s9hZZsG409jyamsJYhWRVncU72z5wsLp3BtAcBG2cpeBg-ebdDZI6vjSURkMLofS1OoUsBS-3MiTEOuWC_JbI-bmBm5poiFhJ7rYlMmY2mYJSN3PWp-iRMIHd0ankW6PY8gxkgxA348CKdQda52LrIfjO2P59U6akqk05O0w1TITFzKg4P6NRRPZXudAYi8w8aRHAPEx47lM8mHfxC9_Y-X3R6oZrKxa1xT2et4xHA0to4z_Ibn1vWoTouEgG2MlpoQwPRQMqFNfs8SQg98nQp6yZUing5KQSqVGhJPFbBvywcv4fI/p.jpeg",
  },
  {
    id: 9,
    content: <SkeletonNine />,
    className: "md:row-span-3",
    thumbnail:
      "https://previews.dropbox.com/p/thumb/ACbfm52QUBhNFUJWxIMc5fQQg-qf4DNLLlJJNRc2G98Jy-HxdSkIXv8CGPpyXHxo4-DqcdHfyYUGu-AfXlPCw_V63nPsG0WK09TFilkH11_ZbBBqfYAid4rAR4wEs5qWVPJhXqOCQpmvNGt-Sv5bvTc6v0uaEUh-YY0uJY7DsSTWEcZM0hEHD9Yp-FwPtP-7a6seSWKSKbgEHiOPOtwI2j-uE-vakvYhYk_0clamemRbdxgjVIRjHKhqfBlDERof4ou6S9_f74UEeomvKnf_amkckWu2yXRzSjhYRdPJvBvF4mOOkAcVNyYFo0H2-6FNKBE/p.jpeg",
  },
  {
    id: 10,
    content: <SkeletonTen />,
    className: "md:row-span-3",
    thumbnail:
      "https://previews.dropbox.com/p/thumb/ACbrbT89r79sDDBU-B7OIp_Vscm4pnEBa7fSf0DKkxjO0ZIMmsg9I9ZmUaci4jYxo49Axv3ua9dTDA4CFbfWQ_WhBDEQImTkxiu7YqlfYu8JmWblsFBk1jlVABlrjmNeHNK6NHwvMGSHU6qjEQlmjI5co-eoEfyTs4RrCrygpHO7G61Sf8J83fKtkOS5ByEtsuwbK_6oqBnFddSB_vqoQkpNI08RwUOgb-6K9w7PMpJ9JsfvCSouU0SK70ue0kycef6T4ILlUz6D0__4xzLy9Ir66LGVYMifY3qiykb3BQsFiu8AnxKFA8pohQldjwFykRY/p.jpeg",
  },
];
