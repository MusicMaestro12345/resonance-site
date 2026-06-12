// The Resonance marketing site — same hand-drawn language as the app:
// every border is an individually-seeded rough sketch, every icon a doodle.

import { RoughBox } from './ui/RoughBox';
import {
  DrumDoodle, FlaskDoodle, HeadphonesDoodle, MapDoodle, NotesDoodle,
  PickDoodle, PlanetDoodle, RadarDoodle, ScoreDoodle, WandDoodle,
} from './ui/doodles';

const TRIAL_URL = '#get';
const BUY_URL = '#get';

function Underline({ color = '#fb923c' }: { color?: string }) {
  return (
    <svg viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden>
      <path
        d="M4 9 C 60 4, 120 12, 170 8 S 270 5, 296 9"
        fill="none" stroke={color} strokeWidth="3.4" strokeLinecap="round"
      />
    </svg>
  );
}

interface ToolRowProps {
  flip?: boolean;
  shot: string;
  alt: string;
  color: string;
  icon: React.ReactNode;
  title: string;
  quip: string;
  children: React.ReactNode;
}

function ToolRow({ flip, shot, alt, color, icon, title, quip, children }: ToolRowProps) {
  return (
    <div className={`tool-row${flip ? ' flip' : ''}`}>
      <RoughBox className="tool-media" color={color} strokeWidth={1.6} doublePass>
        <img src={shot} alt={alt} loading="lazy" />
      </RoughBox>
      <div className="tool-copy">
        <h3 style={{ color }}>{icon}{title}</h3>
        <p>{children}</p>
        <p className="quip" style={{ color }}>{quip}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <header className="topbar">
        <div className="wrap">
          <a className="wordmark" href="#top">
            <img src="/icon.svg" alt="" />
            RESONANCE
            <span className="by-keystone">by Keystone</span>
          </a>
          <nav className="topnav">
            <a href="#tools">tools</a>
            <a href="#pro">pro stuff</a>
            <a href="#nerds">for nerds</a>
            <a href="#pricing">pricing</a>
            <RoughBox as="a" href={TRIAL_URL} className="cta-chip btn" color="#fb923c" fillColor="#fb923c" fillStyle="solid">
              try it free
            </RoughBox>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ---- hero ---- */}
        <section className="hero">
          <div className="wrap">
            <h1>
              Make music,<br />
              <span className="underline">not prompts.<Underline /></span>
            </h1>
            <p className="sub">
              Resonance is a <b>hand-drawn DAW with music theory in its bones</b>.
              Hum to find your key, sketch a beat, rip a solo, host your favourite
              synths — it's GarageBand-easy, Logic-deep, and there isn't a single
              AI in the building.
            </p>
            <div className="cta-row">
              <RoughBox as="a" href={TRIAL_URL} className="btn primary" color="#fb923c" fillColor="#fb923c" fillStyle="solid" doublePass>
                Start your free 7-day trial
              </RoughBox>
              <RoughBox as="a" href={BUY_URL} className="btn" color="#a78bfa" doublePass>
                Buy once — £29.99
              </RoughBox>
            </div>
            <div className="cta-note">no subscription. obviously.</div>
            <RoughBox className="hero-shot" color="rgba(233,230,221,0.6)" strokeWidth={1.8} doublePass>
              <img src="/shots/hero.png" alt="The Resonance timeline: hand-drawn tracks, clips, piano roll and the Toolbox" />
              <div className="shot-caption">yes, the whole app really looks like this ✏</div>
            </RoughBox>
            <div className="chips" aria-hidden>
              <RoughBox as="span" className="chip" color="#a78bfa">zero AI, infinite music theory ✦</RoughBox>
              <RoughBox as="span" className="chip" color="#60a5fa">~6ms when you need to shred</RoughBox>
              <RoughBox as="span" className="chip" color="#f472b6">every border wobbles on purpose</RoughBox>
              <RoughBox as="span" className="chip" color="#4ade80">your songs stay on your machine</RoughBox>
            </div>
          </div>
        </section>

        {/* ---- tools ---- */}
        <section id="tools">
          <div className="wrap">
            <div className="sec-head">
              <h2>The Toolbox</h2>
              <p>
                Pop-out instruments and generators that actually understand keys,
                chords and groove — so the ideas come out sounding like ideas.
              </p>
            </div>

            <ToolRow
              shot="/shots/harmony.png" alt="Harmony Lab window over the timeline"
              color="#f472b6" icon={<FlaskDoodle size={26} />}
              title="Harmony Lab"
              quip="an instrument you can't play wrong"
            >
              Hold keys 1–7 for the chords of your key while the smart keyboard
              remaps live so every melody note fits the chord you're holding.
              Press record, jam with both hands, and the whole thing lands in
              your song as clips.
            </ToolRow>

            <ToolRow
              flip shot="/shots/beats.png" alt="Beat Lab with its clickable drum grid"
              color="#fb923c" icon={<DrumDoodle size={26} />}
              title="Beat Lab"
              quip="click the grid. drag to paint. done."
            >
              Seven genre grooves on a fully clickable step grid, voiced by five
              real-character kits — Studio, Rock, 808, Club and Dusty. Density,
              swing and fills included. Drop a melody on a drum track and it
              plays as beats, GarageBand-style.
            </ToolRow>

            <ToolRow
              shot="/shots/solo.png" alt="Solo Lab generating an expressive lead line"
              color="#60a5fa" icon={<PickDoodle size={26} />}
              title="Solo Lab"
              quip="bends, vibrato, zero mercy"
            >
              Generate lead lines that follow the chords already in your song —
              blues stings, soaring rock bends, jazz runs, full shred — played on
              real sampled guitars. Or sketch your own lick on a scale-locked
              grid where every cell is in tune.
            </ToolRow>

            <ToolRow
              flip shot="/shots/songmap.png" alt="Song Map showing the arrangement as section blocks"
              color="#4ade80" icon={<MapDoodle size={26} />}
              title="Song Map"
              quip="rearrange your song like fridge magnets"
            >
              Your whole arrangement as hand-drawn section blocks. Click one to
              jump there and loop it; shuffle, duplicate or delete entire
              sections and every clip, marker and tempo change moves along.
            </ToolRow>

            <ToolRow
              shot="/shots/stepseq.png" alt="The step sequencer view"
              color="#a78bfa" icon={<WandDoodle size={26} />}
              title="Melody Generator &amp; Arpeggiator"
              quip="feed it lyrics. seriously, try it."
            >
              Pick a genre and a mood — folk strums on a real steel-string, rock
              riffs low and mean, lo-fi floats. Type lyrics and the rhythm
              follows your syllables. Lock the seed, twist the knobs, and drag
              the preview straight onto a lane.
            </ToolRow>

            <div className="card-grid">
              <RoughBox className="mini-card" color="#5eead4">
                <h3 style={{ color: '#5eead4' }}><RadarDoodle size={22} />Voice Key Finder</h3>
                <p>Sing into the mic and Resonance names every note live, then recommends the keys that fit your voice. One click sets the project.</p>
              </RoughBox>
              <RoughBox className="mini-card" color="#fbbf24">
                <h3 style={{ color: '#fbbf24' }}><ScoreDoodle size={22} />Four editors</h3>
                <p>Piano roll, hand-drawn notation, step sequencer and Smart Chords — paint diatonic chords from an always-in-key palette.</p>
              </RoughBox>
              <RoughBox className="mini-card" color="#fb7185">
                <h3 style={{ color: '#fb7185' }}><NotesDoodle size={22} />Expressive MIDI</h3>
                <p>Slides, scoops, falls and vibrato on any note, so nothing sounds robotic. Even the physically-modelled guitar bends properly.</p>
              </RoughBox>
              <RoughBox className="mini-card" color="#60a5fa">
                <h3 style={{ color: '#60a5fa' }}><HeadphonesDoodle size={22} />Record everything</h3>
                <p>Guitar and mic with amp sim and count-in, loop-recording with take comping, and live MIDI capture from your keyboard or the Harmony Lab.</p>
              </RoughBox>
            </div>
          </div>
        </section>

        {/* ---- pro ---- */}
        <section id="pro">
          <div className="wrap">
            <div className="sec-head">
              <h2>The pro stuff is all in there</h2>
              <p>Under the chalk dust: a serious production environment.</p>
            </div>
            <div className="pro-grid">
              <RoughBox className="tool-media" color="#60a5fa" strokeWidth={1.6} doublePass>
                <img src="/shots/mixer.png" alt="The Resonance mixer with faders, meters and plugin chains" loading="lazy" />
              </RoughBox>
              <ul className="pro-list">
                <li><b>VST3 &amp; CLAP plugins</b> — host your synths on MIDI tracks, chain up to four effects per channel, full presets saved with your project.</li>
                <li><b>Real bounces</b> — exports and freezes render your plugins natively, sample-accurate.</li>
                <li><b>Buses, returns &amp; sidechain</b> — group tracks, shared FX, pump anything from anything.</li>
                <li><b>Automate everything</b> — volume, pan, sends, drive, chorus, compression, drawn right on the timeline.</li>
                <li><b>Tempo maps &amp; time-stretch</b> — audio follows your tempo changes without changing pitch.</li>
                <li><b>Mastering-grade export</b> — WAV/MP3/stems with measured LUFS and true peak, normalize to −14 LUFS for streaming.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ---- nerds ---- */}
        <section id="nerds">
          <div className="wrap">
            <div className="sec-head">
              <h2>Stack, for nerds</h2>
              <p>You weren't going to scroll past without asking.</p>
            </div>
            <RoughBox className="nerds-card" color="#5eead4" strokeWidth={1.5}>
              <div className="nerds-grid">
                <div><b>Engine:</b> native Rust core, 128-sample block pipeline</div>
                <div><b>Output:</b> WASAPI shared by default; exclusive mode ≈ 6 ms measured (144 frames @ 48 kHz)</div>
                <div><b>Plugins:</b> VST3 + CLAP, crash-proof out-of-process scanning, automatic delay compensation</div>
                <div><b>Voices:</b> 256 per pool with oldest-note stealing, 128 mixer strips</div>
                <div><b>Loudness:</b> ITU-R BS.1770 LUFS + 4× oversampled true peak</div>
                <div><b>Stretch:</b> dependency-free WSOLA, tempo-map aware</div>
                <div><b>Guitar:</b> Karplus-Strong strings, pre-rendered for tuning stability</div>
                <div><b>Theory:</b> deterministic seeded generators — same seed, same melody</div>
                <div><b>UI:</b> React 19 + a seeded canvas sketch renderer; the wobble never shimmers</div>
                <div><b>Reliability:</b> DSP self-tests, a playback watchdog, and a test VST3 the host is verified against</div>
              </div>
            </RoughBox>
          </div>
        </section>

        {/* ---- pricing ---- */}
        <section id="pricing">
          <div className="wrap">
            <div className="sec-head">
              <h2>One price. Like buying an instrument.</h2>
              <p>Because that's what it is.</p>
            </div>
            <div className="price-grid">
              <RoughBox className="price-card" color="#60a5fa" strokeWidth={1.5}>
                <h3 style={{ color: '#60a5fa' }}>Free trial</h3>
                <div className="price">£0</div>
                <div className="per">7 days · everything unlocked · no card</div>
                <ul>
                  <li>every tool, every feature</li>
                  <li>your projects stay yours</li>
                  <li>runs offline, on your machine</li>
                </ul>
                <RoughBox as="a" href={TRIAL_URL} className="btn" color="#60a5fa" doublePass>
                  Download the trial
                </RoughBox>
              </RoughBox>
              <RoughBox className="price-card" color="#fb923c" strokeWidth={1.8} doublePass fillColor="rgba(251,146,60,0.07)">
                <h3 style={{ color: '#fb923c' }}>Resonance, forever</h3>
                <div className="price">£29.99</div>
                <div className="per">one-time · free updates · no subscription</div>
                <ul>
                  <li>everything in the trial, forever</li>
                  <li>VST3 &amp; CLAP plugin hosting</li>
                  <li>a warm fuzzy feeling</li>
                </ul>
                <RoughBox as="a" href={BUY_URL} className="btn primary" color="#fb923c" fillColor="#fb923c" fillStyle="solid" doublePass>
                  Buy Resonance
                </RoughBox>
              </RoughBox>
            </div>
            <p className="price-note" id="get">
              Windows 10/11 (64-bit) · checkout and trial downloads are landing here very soon —
              we're putting the kettle on. ☕
            </p>
          </div>
        </section>

        {/* ---- faq ---- */}
        <section id="faq">
          <div className="wrap">
            <div className="sec-head">
              <h2>Fair questions</h2>
            </div>
            <div className="faq-grid">
              <RoughBox className="faq-card" color="#a78bfa">
                <h3>So… no AI at all?</h3>
                <p>None. We counted twice. The generators are pure music theory — scales, voice-leading, groove grammars. Your melodies aren't predictions; they're compositions that follow the same rules human writers use.</p>
              </RoughBox>
              <RoughBox className="faq-card" color="#4ade80">
                <h3>Does it need the internet?</h3>
                <p>Only to fetch the sampled instruments once. After that, everything — projects, audio, exports — lives and works entirely on your machine.</p>
              </RoughBox>
              <RoughBox className="faq-card" color="#60a5fa">
                <h3>Will my plugins work?</h3>
                <p>If they ship VST3 or CLAP (Vital, Surge XT, Valhalla, TDR… most modern plugins do), yes — as instruments on MIDI tracks or chained as effects, with their presets saved in your project.</p>
              </RoughBox>
              <RoughBox className="faq-card" color="#fbbf24">
                <h3>Who's Keystone?</h3>
                <p>A small software studio with big crayons. Resonance is our first release — an animation app called Kinetra currently exists as a very confident napkin sketch.</p>
              </RoughBox>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="foot-planet"><PlanetDoodle size={36} /></div>
          <div className="foot-line">sound is your universe ✦</div>
          <div className="foot-sub">
            Resonance is a <b>Keystone</b> production · © {new Date().getFullYear()} Keystone ·
            hand-drawn with care (and rough.js)
          </div>
        </div>
      </footer>
    </>
  );
}
