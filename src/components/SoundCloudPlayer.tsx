const defaultUrl =
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1971257613&color=%2300b0b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";

export const SoundCloudPlayer = ({ src = defaultUrl }: { src?: string }) => {
  return (
    <>
      <iframe
        title="SoundCloud Player"
        style={{ borderRadius: "var(--border-radius)" }}
        width="100%"
        height="250"
        frameBorder="no"
        allow="autoplay"
        src={src}
      ></iframe>
    </>
  );
};
