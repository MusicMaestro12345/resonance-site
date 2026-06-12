// Hand-drawn doodle icons. Each is an individually authored SVG with
// deliberately imperfect strokes — wobbling lines, overshot corners,
// uneven curves — so the UI feels drawn, not rendered.

interface DoodleProps {
  size?: number;
  className?: string;
}

function D({ size = 22, className = '', children, vb = '0 0 24 24' }:
  DoodleProps & { children: React.ReactNode; vb?: string }) {
  return (
    <svg
      className={`doodle ${className}`}
      width={size} height={size} viewBox={vb}
      fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export const PianoDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M3.2 6.4c5.5-1 12-.8 17.6.2l-.4 11.2c-5.8.9-11.6.8-16.9-.1z" />
    <path d="M7.3 6.2l.2 7.1M11.9 6l.1 7.4M16.4 6.2l.3 7.2" />
    <path d="M3.4 13.6c5.7.9 11.7 1 17 .1" strokeWidth="1.1" />
  </D>
);

export const GuitarDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M9.1 13.2c-2.4.2-4.3 2-4.1 4.2.2 2.1 2.2 3.5 4.4 3.2 2.3-.3 3.6-2 3.5-3.9-.1-1.4.9-2.1 1.7-3" />
    <path d="M14.4 13.8 19.8 7" />
    <path d="m18.6 5.6 1.9-1.4M19.6 7.3l1.5-1.8" strokeWidth="1.2" />
    <circle cx="9.4" cy="16.9" r="1.3" />
  </D>
);

export const DrumDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M5 10.3c4.6-1.5 9.6-1.4 14 .1" />
    <path d="M5 10.4l.3 6.5c4.3 1.6 9.2 1.6 13.4 0l.3-6.4" />
    <path d="M5.1 10.5c2.1 1.2 4.6 1.7 7 1.7 2.4 0 4.9-.6 6.8-1.7" strokeWidth="1.1" />
    <path d="m8.3 4.5 3.6 5.7M16.9 4.2l-3.3 5.9" strokeWidth="1.2" />
  </D>
);

export const MicDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M9.8 4.6c.1-1.3 1-2.1 2.2-2.1 1.3 0 2.2 1 2.2 2.2l-.2 6c-.1 1.3-1 2.1-2.1 2.1s-2.1-.8-2.2-2z" />
    <path d="M7 9.7c.2 3 2.3 5 5 5 2.8.1 4.9-2 5.1-4.8" />
    <path d="M12 14.9l-.1 4.2M8.9 19.4c2 .5 4.2.5 6.1-.1" />
  </D>
);

export const BellDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M12 3.6c.6 0 1 .5 1 1v.7c2.6.6 4.2 2.7 4.3 5.3.1 2 .5 3.3 1.4 4.5.3.5 0 1.2-.6 1.2H6c-.6 0-1-.7-.6-1.2.9-1.3 1.3-2.7 1.3-4.6 0-2.6 1.8-4.6 4.2-5.2v-.7c0-.5.5-1 1.1-1z" />
    <path d="M10.3 18.5c.3 1.1 1 1.7 1.8 1.7s1.5-.7 1.7-1.6" />
  </D>
);

export const WaveDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M3 12.4c.8 0 .9-2.3 1.7-2.3.9 0 .8 4.5 1.7 4.5.8 0 .8-8.4 1.7-8.4.9 0 .9 11.6 1.8 11.6.8 0 .8-9 1.7-9 .9 0 .8 5.7 1.7 5.7.8 0 .9-7.5 1.7-7.5.9 0 .9 9.4 1.8 9.4.8 0 .7-6.3 1.6-6.3.8 0 .9 2.3 1.7 2.3" strokeWidth="1.3" />
  </D>
);

export const SynthDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M3.6 7.2c5.6-.9 11.5-.9 16.9.1l-.3 9.5c-5.5.9-11 .9-16.3-.1z" />
    <circle cx="7.3" cy="10.3" r="1.1" />
    <circle cx="11.9" cy="10.2" r="1.1" />
    <circle cx="16.5" cy="10.4" r="1.1" />
    <path d="M6.2 14.3l11.4.1" strokeWidth="1.2" />
  </D>
);

export const WandDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M4.6 19.5 14.9 9" strokeWidth="1.7" />
    <path d="m16.8 3.4.5 2.1 2.1.4-2 .7-.3 2.2-.8-2-2.1-.3 1.9-.9z" />
    <path d="M20.3 10.9l1.4.4-1.3.5-.4 1.4-.4-1.4-1.4-.4 1.4-.4.3-1.4z" strokeWidth="1.1" />
  </D>
);

export const SparkleDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M12 4.2c.5 2.8 1.7 5 4.4 5.6-2.7.9-3.9 3-4.3 5.9-.6-2.9-1.8-5-4.5-5.8 2.7-.7 3.9-2.8 4.4-5.7z" />
    <path d="M18.9 14.7l.3 1.5 1.5.4-1.5.4-.3 1.6-.4-1.6-1.5-.4 1.5-.4z" strokeWidth="1.1" />
  </D>
);

export const HeadphonesDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M4.5 14.2C4.2 9 7.5 5 12 5c4.6-.1 7.9 3.9 7.6 9" />
    <path d="M4.6 14.1c1.4-.4 2.4.3 2.6 1.6.2 1.4-.5 2.7-1.7 2.9-1 .2-1.6-.6-1.7-1.7zM19.5 14.2c-1.4-.5-2.5.2-2.6 1.5-.2 1.4.5 2.7 1.6 2.9 1 .2 1.7-.6 1.8-1.6z" />
  </D>
);

export const PlanetDoodle = (p: DoodleProps) => (
  <D {...p}>
    <circle cx="12" cy="12" r="5.2" />
    <path d="M4.5 14.8c1.8 1.6 5 2.4 8.2 1.8 3.7-.6 6.6-2.5 6.9-4.5.1-1-.6-1.9-1.9-2.4" />
    <path d="M5.9 8.4 6.2 9l.7.2-.6.3-.2.7-.3-.6-.6-.2.6-.3z" strokeWidth="1" />
  </D>
);

export const GearDoodle = (p: DoodleProps) => (
  <D {...p}>
    <circle cx="12" cy="12" r="2.6" />
    <path d="M12 4.3l.7 2.2c.7.2 1.4.5 2 .9l2.1-1 1.5 1.6-1.1 2c.4.6.6 1.3.8 2l2.2.8-.1 2.1-2.2.6c-.2.7-.5 1.4-.9 2l1 2.1-1.6 1.4-2-1.1c-.6.4-1.3.6-2 .8l-.8 2.2-2.1-.1-.6-2.3c-.7-.2-1.3-.5-1.9-.9l-2.1 1-1.4-1.6 1-2c-.4-.6-.6-1.3-.8-2l-2.2-.8.1-2.1 2.2-.6c.2-.7.5-1.4.9-2l-1-2.1L6.3 6l2 1c.6-.4 1.2-.6 2-.8z" strokeWidth="1.2" />
  </D>
);

export const SaveDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M5 4.6c4.3-.6 8.4-.6 12.2-.1l2.2 2.3-.4 12.6c-5.2.7-10.3.7-15.2 0z" />
    <path d="M8 4.5v4.4c2.6.5 5.2.5 7.7 0V4.6" strokeWidth="1.2" />
    <path d="M7.6 13.1c3-.5 6-.5 8.9 0l-.1 6" strokeWidth="1.2" />
  </D>
);

export const ExportDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M12 14.6 11.8 3.8" />
    <path d="m8.3 7 3.6-3.5L15.6 7" />
    <path d="M5 11.4l-.6 8c5.1.8 10.2.8 15 .1l-.5-8" />
  </D>
);

export const FolderDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M3.6 7.2V6c0-.8.6-1.4 1.4-1.4h3.4L10.5 6h8.1c.8 0 1.4.7 1.3 1.5" />
    <path d="M3.2 8.5h17.6l-1.6 9.3c-4.8.8-9.7.8-14.4.1z" />
  </D>
);

export const PlusDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M12.1 4.8c-.2 4.8-.2 9.6-.2 14.3M4.9 12.1c4.8-.3 9.5-.3 14.2-.1" strokeWidth="1.7" />
  </D>
);

export const PencilDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="m14.8 5.2 4 3.9L8.5 19.7l-4.8 1.2 1-4.9z" />
    <path d="m13.2 7 3.8 3.8" strokeWidth="1.1" />
  </D>
);

export const EraserDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="m13.4 4.6 6 5.8-7.6 8-4.4.1-3-3z" />
    <path d="m9.8 8.4 5.9 5.9" strokeWidth="1.1" />
    <path d="M7 19.5l12.7-.2" strokeWidth="1.2" />
  </D>
);

export const PointerDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M7 3.8c3.7 3.5 7.4 7.2 10.7 10.9l-5.5.5 2.7 4.6-2.3 1.3-2.7-4.8-3.3 4z" />
  </D>
);

export const LoopDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M5 9.6C5.7 6.9 8.5 5.3 12 5.3c3.6 0 6.4 1.6 7 4.2" />
    <path d="m16.5 8 2.7 1.7 1.6-2.6" />
    <path d="M19 14.4c-.6 2.7-3.5 4.3-7 4.3-3.5.1-6.3-1.6-7-4.2" />
    <path d="m7.5 16-2.7-1.7-1.6 2.7" />
  </D>
);

export const MetronomeDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M9.2 4.3h5.4L17.8 19c-3.9.9-7.8.9-11.6.1z" />
    <path d="m11.9 13.7 5-7.6" strokeWidth="1.2" />
    <path d="M7.2 15.2c3.2.7 6.4.7 9.5.1" strokeWidth="1.1" />
  </D>
);

export const SmileyDoodle = (p: DoodleProps) => (
  <D {...p}>
    <circle cx="12" cy="12" r="7.6" />
    <path d="M9 10.2c0 .1.1.2.1.3M15 10.1c0 .1 0 .2.1.3" strokeWidth="2" />
    <path d="M8.6 14.2c2.1 1.9 4.7 1.9 6.9.1" />
  </D>
);

export const NotesDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M9.3 16.8 9 6.1l9.4-1.9.3 10.5" />
    <ellipse cx="7.2" cy="17.1" rx="2.2" ry="1.7" />
    <ellipse cx="16.6" cy="14.9" rx="2.2" ry="1.7" />
    <path d="m9.1 8.6 9.4-1.9" strokeWidth="1.2" />
  </D>
);

export const ScoreDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M4 7.4c5.4-.4 10.7-.4 16-.1M4.1 10.6h15.8M4 13.8c5.3.4 10.6.4 15.9.1M4.1 17h15.8" strokeWidth="1.1" />
    <ellipse cx="9.5" cy="12.2" rx="1.8" ry="1.4" />
    <path d="M11.3 12V5.8" strokeWidth="1.2" />
  </D>
);

export const StepSeqDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M4.3 5.4h4.6v4.4H4.5zM10.6 5.5h4.5l.1 4.3h-4.6zM16.9 5.4l4.4.1-.1 4.3h-4.4zM4.4 14.2H9l-.1 4.4-4.5-.1zM10.7 14.3l4.4-.1.1 4.4h-4.5z" strokeWidth="1.2" />
  </D>
);

export const ChordsDoodle = (p: DoodleProps) => (
  <D {...p}>
    <circle cx="8" cy="16.4" r="2" />
    <circle cx="15.7" cy="14.8" r="2" />
    <path d="M10 16.2V6.7l7.7-1.6v9.5" strokeWidth="1.3" />
    <path d="m10 9.6 7.7-1.7" strokeWidth="1.1" />
  </D>
);

export const SpeakerDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M4.3 9.6c1.5-.3 3-.4 4.4-.3l4.5-4.2c.4-.4 1-.1 1 .4l.2 13c0 .6-.7.9-1.1.5l-4.6-4c-1.4.1-2.8 0-4.2-.3-.4-1.7-.5-3.4-.2-5.1z" />
    <path d="M17.2 9.2c1.2 1.7 1.2 3.9.1 5.7M19.6 7.2c2 2.9 2 6.6.2 9.6" strokeWidth="1.3" />
  </D>
);

export const SpeakerOffDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M4.3 9.6c1.5-.3 3-.4 4.4-.3l4.5-4.2c.4-.4 1-.1 1 .4l.2 13c0 .6-.7.9-1.1.5l-4.6-4c-1.4.1-2.8 0-4.2-.3-.4-1.7-.5-3.4-.2-5.1z" />
    <path d="m16.6 9.7 4.6 4.8M21.3 9.9l-4.8 4.5" strokeWidth="1.6" />
  </D>
);

export const PickDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M12 20.4c-3.6-2.6-6.3-5.8-7-9.5-.6-3.4 1.6-6.4 5-7 1.3-.2 2.8-.2 4.1 0 3.4.7 5.5 3.7 4.8 7.1-.7 3.6-3.4 6.8-6.9 9.4z" />
    <path d="M9.3 8.4c1.7-.6 3.6-.6 5.3 0" strokeWidth="1.1" />
    <path d="m17.9 3.3 1.1 1.1M20.5 6.2l.9.5" strokeWidth="1.1" />
  </D>
);

export const FlaskDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M10 3.6h4M11 3.8l-.1 5.2-5.2 9.3c-.5.9.1 2 1.1 2 3.5.4 7 .4 10.3 0 1-.1 1.6-1.2 1.1-2.1l-5.3-9.1V3.9" />
    <path d="M7.5 14.6c3-1 6-1 9 .1" strokeWidth="1.2" />
    <circle cx="11" cy="17" r="0.9" strokeWidth="1" />
    <circle cx="14" cy="18.4" r="0.6" strokeWidth="1" />
    <path d="m18.6 4.6.3 1.2 1.2.3-1.2.4-.3 1.2-.3-1.2-1.2-.4 1.2-.3z" strokeWidth="1" />
  </D>
);

export const RadarDoodle = (p: DoodleProps & { size?: number }) => (
  <D {...p} vb="0 0 80 80">
    <circle cx="40" cy="40" r="33" strokeWidth="1.4" />
    <circle cx="40" cy="40" r="24" strokeWidth="1" opacity="0.7" />
    <circle cx="40" cy="40" r="15" strokeWidth="1" opacity="0.55" />
    <circle cx="40" cy="40" r="6.5" strokeWidth="1" opacity="0.45" />
    <circle cx="40" cy="40" r="3.4" fill="currentColor" stroke="none" />
    <path d="M40 5.5v4M40 70.5v4M5.5 40h4M70.5 40h4" strokeWidth="1.2" opacity="0.7" />
  </D>
);

export const MapDoodle = (p: DoodleProps) => (
  <D {...p}>
    <path d="M4.2 6.1 8.7 4.6l5.8 1.7 5.2-1.8.3 12.9-5.4 1.9-5.8-1.6-4.4 1.5z" />
    <path d="M8.8 4.8l-.2 14M14.4 6.5l.1 13.1" strokeWidth="1.1" />
    <path d="M6.2 10.6c1.7 1.4 3.4.2 5.1.9 1.8.8 3.3-.6 5.7.3" strokeWidth="1.2" strokeDasharray="2.4 2.2" />
    <circle cx="17.2" cy="9" r="1" strokeWidth="1.2" />
  </D>
);
