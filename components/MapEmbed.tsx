// components/MapEmbed.tsx
export default function MapEmbed() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden border">
       <iframe
        className="w-full h-full"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9832639870024!2d79.86993947448262!3d6.892604818765109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b90a1b11215%3A0x29dd4b3aa05a05e3!2sBigsmileVoyages%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1768533952897!5m2!1sen!2slk"
      />
    </div>
  );
}