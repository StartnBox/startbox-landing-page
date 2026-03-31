import Image from 'next/image'

export default function SocialProof() {
  const founders = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOETbdFDalSrTXul9qVH3y3s9Q2FEKyiVrMmEOWcTWrnYcwbYYqy6qo6-hNi21Vl4eJ1j3sb7-pFOw5YzzsPOqRWMLkCOfh3qvQj3x0nTp6ozJiPApLi1cl5rmX1KEUJOMCGI1Ew2L0Mr9qDEOCRZQk2tPaZuQwsTpWczvrwZZqRVSS6U53czc5wDyfvEZEAgkbkdupli07ZkIaoceU7acsH_-aSElk_bXZkakkNFRjqH2DWcnaz5-dqadz7IP6jng_uBvTLY_ZZrm",
      alt: "portrait of a confident tech founder smiling"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvXSoKPvuDy8k2Os4OCdzZzVk2XpxEKrbexkd0OlKXP83kXMSUBjQbtnBKN_wIzSwe79K2oYi_gKnGNkYvR_gnmlhu06FZdhZhsHNwt5t_N4QnUkHFX0wS7nr6bo3dmgBxglg1N9h4ihReTvOHWcBLmPfTLzs1GIlIFXSbVfvnKoBXtD5u8zcu9PROOG9eLcRRO0pjG_0-EpaDkujqoslH3dCT8DCHP7QKZNE1xw_XfEK3jF3688pZOsd-NBQQm74deNCdW7_zLK43",
      alt: "professional portrait of a young entrepreneur"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZeMrOaovK3wUB09LbiUjZmM_t0d-KFIFmjw-fhD-QTPjZgnfbSulNK29eUxDAGpS9E1mgag-jtHE2zKhtSzMQ-v2DO4U8jPsBBAAoDrTG3KMVN39eLWdORc9Tni7tAh3U8vxzMHQgYyYiSExDM4n4r3_TJi_fYVKqUs_44s5VIlxjuiU1xBflubaiYPQF39wH9Wze2I3LTXs4GG4KQM1QlWYnU2PF4LogJRoihtMq_xI3u_xHNNz_I5BgB7p36-FgskWY3PWQg1sr",
      alt: "close-up portrait of a startup ceo"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCErq4o6aPQ7HDuR6BC2jpZMKDN-4syKYy_4dUaTefUABwYza-2H3Tr8Kz7v9MoeuR34UuOC4dlUuIeeh3CP4dHBvGndLb_QPj3HzDJXI3_UUihvyipwuXU3xlaFbZ9rl4LnTck6D_tinAturmX_r0hmhDugeXuIGcIAey38NBSt2UNNHZYKgD9Zz-msFM3Zc_VIG_0xK_cEHdvTBJue552VY3I-UHgTVYHv9v4ON2o6_Km2W4SfERQSAiJv9LRXqU8sA_noprZvGc5",
      alt: "smiling female product manager"
    }
  ]

  return (
    <section className="px-6 py-24 border-y border-slate-700/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md">
            <h2 className="font-headline text-3xl font-bold mb-4">Join 100+ early founders</h2>
            <p className="text-slate-400">
              The next generation of unicorns is being built on StartBox. Secure your spot in the ecosystem.
            </p>
          </div>
          
          <div className="flex -space-x-4 overflow-hidden">
            {founders.map((founder, index) => (
              <div key={index} className="relative h-16 w-16 rounded-full ring-4 ring-slate-900 overflow-hidden">
                <Image
                  src={founder.src}
                  alt={founder.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 ring-4 ring-slate-900 text-purple-400 font-bold">
              +96
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}