import Video from "../assets/video/herovideo.mp4";
export default function HeroVideo() {
  return (
    <section className="hero__video-section">
      <div className="hero__video-column">
        <h1 className="hero__video-title">PUT YOUR PROJECTS IN GEAR</h1>
        <p>project management for everyone</p>
      </div>
      <video
        type="video/mp4"
        loop
        autoPlay
        src={Video}
        className="hero__video"
      ></video>
      <div className="hero__video-column">
        <h1 className="hero__video-title">YOURS PROJECTS, PUT IN GEAR</h1>
        <p>project management for everyone</p>
      </div>
    </section>
  );
}
