"use client";
import { FlipWords } from "@/components/ui/flip-words";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { Heart } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

export default function LayoutGridDemo() {
  const words = ["bb", "leidy", "chica", "lulu", "xayah", "idiota"];

  return (
    <div className="min-h-screen   w-full bg-black p-4">
      <div className="md:text-2xl text-lg font-normal text-white pl-1">
        Recuerdos con mi
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
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
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
      "https://previews.dropbox.com/p/thumb/ACbEX-ErWpfbZTMWgwuske9SCiBWdjTRZCXRLuvVIyHbdgz2zCmSggRP8ImSpz1w7YiL_12a7vFHAGsL2-ewXN1QThULwYdzYDH7BA5FYjwUbVh9ajAN3VVwuPYmMVrGIpaVtytn0k_I6bxf4JQtkoUjPGABkPyvAm_rkTCaZ13ZiTckR-7qo4CJyhVc059OwEQScfReeQD_l-bgwNPUlQMCIN4uoij0bwW3me4H0xC437XZ-DH2s9x_d4kk9ARf7O7kkiAn_vCWWFSLQ3OPnlpaPUcPRa4aa7FfZ_2vjCfnwrdn4L-SUYKPl3I4wRP1U_A/p.jpeg",
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
    content: <SkeletonFour />,
    className: "md:row-span-3",
    thumbnail:
      "https://previews.dropbox.com/p/thumb/ACYrXWrOLIr7XnzTGQ1kdW83-k8e-oVjbJmnx-sCufk1wBbLOoJjmC1guRUNrTwXvu4XqjDqLEGFuEMPjeqG6zNZahKG1-KDGb03Gsc3PX7kccNqbhW_JIN2R402Ps78qFslqlp93u_UuBW7fwlmpsXhmP0_fBLLGMhmr-BD06rGEy9cU_3U23q2BRh20AJ5T5nB3nOgx_Xxwq0gtvrAfj6sam3is1VebXq_KiY8g5VqC9g_9KSttz5FjWkvIrWSzliLjUu-TOxYjSTOl1zM_aKye6SIKgNUJFxw6el76dP6ypmxYE6hYSrLwOPDbi8w_kA/p.jpeg",
  },
  {
    id: 6,
    content: <SkeletonFour />,
    className: "md:row-span-3",
    thumbnail:
      "https://previews.dropbox.com/p/thumb/ACYuBt99Ib9VqE_gNpeKgd0qGJfP4Cgy_tX11sZWafkpS2FYPbIrfJUMMXXnypxjyvSlV2NQwc433P2w8qqCDsN1q26H5dr-gKJ5whzWgWQOJqPYvdUwA6Adi0oczW-mP4uId1WWRJFidB6SWzWgJP7-pOS422Bfw-s33hM17Eon4keiZ6hET4F9jLvRWTm1-0R6lC2SvsBLrA8cSD4YO5f3MyXSOL7PGi0PuLNHb5-BSYPS2ArpxI7rLC0Ip1s20vz4mE56WctX4IX1DNIWjvVPtjueVAtQoPgk-ay2_IuU9hrL31IdXHme3RcWOKTVIv8/p.jpeg",
  },
  {
    id: 7,
    content: <SkeletonFour />,
    className: "md:row-span-3",
    thumbnail:
      "https://previews.dropbox.com/p/thumb/ACaJucZketYQkBpyWwZWyAXA9-fIO9fE2XOcXhAovAKG0JLM87NvphEiAnjuT2B-dTWnzFaT4OVrwRGINh9gu6qnPN5Ji5SXeERw43F9jVT9ki52OaOtBU7cy_htPYZdyCtFTWOzGgmYK5o_rV6JvIQAatUushwYJd7x-uoqgkHoH3xOnutDazm2oIBX1xr_OKz4AawWZ2vJn7h4c6AeRfndv_SgOL2qzIzIsTN2qfRQsR6zDNtkZGsolAyZdi2ujvnbEJT-HRIfk6_ZbX2UIQcIcatHSnX881jnqdZ_Afdux5ua1nfX1QQD4EnMxY5wM4s/p.jpeg",
  },
  {
    id: 8,
    content: <SkeletonFour />,
    className: "md:row-span-3",
    thumbnail:
      "https://previews.dropbox.com/p/thumb/ACaTHL1Ehj4TOddu8s9hZZsG409jyamsJYhWRVncU72z5wsLp3BtAcBG2cpeBg-ebdDZI6vjSURkMLofS1OoUsBS-3MiTEOuWC_JbI-bmBm5poiFhJ7rYlMmY2mYJSN3PWp-iRMIHd0ankW6PY8gxkgxA348CKdQda52LrIfjO2P59U6akqk05O0w1TITFzKg4P6NRRPZXudAYi8w8aRHAPEx47lM8mHfxC9_Y-X3R6oZrKxa1xT2et4xHA0to4z_Ibn1vWoTouEgG2MlpoQwPRQMqFNfs8SQg98nQp6yZUing5KQSqVGhJPFbBvywcv4fI/p.jpeg",
  },
  {
    id: 9,
    content: <SkeletonFour />,
    className: "md:row-span-3",
    thumbnail:
      "https://previews.dropbox.com/p/thumb/ACZyXXV4d_lahhLu9bWOiA9g88lN-cMZkZXoiMMimV9HI4IeQ8Uv9guDk0uWHkQJ83tCXR9UKg4TVWOZK_eszTFQ_CZkv_WheyvRNFs7d0LcOPuPhWJSB9GPGEnXf2ehYNRz79HH6DPx9SBryKcG29slE1j8DbA_pcn7HvNdUgmaNtv5UgOPJU9ZcMLPhPVBqAhLbA-3cgTqmF8__g7cJUitxT9-zJBYB6kZfHu_aIgXb1olxnIdVQmCZlJ59Kx9WHRjdkqG6LhRyEmyzqt8Q0kwq0WvTcZK1VlXWFWk2II-wZt55wbdzeH0kSSHXtiuEK8/p.jpeg",
  },
  {
    id: 10,
    content: <SkeletonFour />,
    className: "md:row-span-3",
    thumbnail:
      "https://previews.dropbox.com/p/thumb/ACbrbT89r79sDDBU-B7OIp_Vscm4pnEBa7fSf0DKkxjO0ZIMmsg9I9ZmUaci4jYxo49Axv3ua9dTDA4CFbfWQ_WhBDEQImTkxiu7YqlfYu8JmWblsFBk1jlVABlrjmNeHNK6NHwvMGSHU6qjEQlmjI5co-eoEfyTs4RrCrygpHO7G61Sf8J83fKtkOS5ByEtsuwbK_6oqBnFddSB_vqoQkpNI08RwUOgb-6K9w7PMpJ9JsfvCSouU0SK70ue0kycef6T4ILlUz6D0__4xzLy9Ir66LGVYMifY3qiykb3BQsFiu8AnxKFA8pohQldjwFykRY/p.jpeg",
  },
];
