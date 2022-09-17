interface GammerBannerProps {
    bannerUrl: string;
    title: string;
    adsCount: number;
}

export function GammerBanner(props: GammerBannerProps) {
    return (
        <a href="https://www.twitch.tv/directory" className="relative rounded-lg overflow-hidden" target="_blank">
          <img src={props.bannerUrl} alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">{props.title}</strong>
            <span className="text-zinc-300 text-sm block">{props.adsCount} anúncio(s)</span>
          </div>
        </a>
    ) 
}