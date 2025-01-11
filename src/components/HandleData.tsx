import { SocialNetwork, UseHandle } from '../types'

type HandleDataProps = {
  data: UseHandle
}
export default function HandleData({ data }: HandleDataProps) {
  const links: SocialNetwork[] = JSON.parse(data.links).filter(
    (link: SocialNetwork) => link.enabled
  )
  return (
    <div className="space-y-6 text-white text-center">
      <p className="text-5xl font-bold">{data.handle}</p>
      {data.image && (
        <img
          src={data.image}
          alt={data.handle}
          className="max-w-[250px] rounded-lg mx-auto"
        />
      )}
      <p className="text-lg font-bold">{data.description}</p>
      <div className="mt-20 flex flex-col gap-6">
        {links.length ? (
          links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
              className="bg-white px-5 py-2 flex items-center gap-5 rounded-lg"
            >
              <img
                src={`/social/icon_${link.name}.svg`}
                alt={link.name}
                className="w-12"
              />
              <p className="text-black font-bold capitalize text-lg">
                Visita mi perfil de {link.name}
              </p>
            </a>
          ))
        ) : (
          <p>No hay enlaces en este perfil</p>
        )}
      </div>
    </div>
  )
}
