import { regions } from "@/data/site";

/**
 * The signature element.
 *
 * It's a survey plot of the regions the work in the list below actually
 * deploys into — Melbourne as the origin, then the three cloud regions the
 * EcoLens and CloudEco builds run in. Arcs connect the origin to each site.
 *
 * Deliberately not a globe, not a particle field, not an orbiting logo.
 * It carries information: if a region changes, the drawing changes.
 */

const W = 520;
const H = 400;
const PAD = 34;

function px(pct: number) {
  return PAD + (pct / 100) * (W - PAD * 2);
}
function py(pct: number) {
  return PAD + (pct / 100) * (H - PAD * 2);
}

export function RegionPlot() {
  const home = regions.find((r) => r.home)!;
  const hx = px(home.x);
  const hy = py(home.y);

  return (
    <figure aria-labelledby="plot-caption" style={{ margin: 0 }}>
      <svg
        className="plot"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Survey plot of the cloud regions this work deploys into: Melbourne as the origin, connected to AWS Sydney, Azure Sydney and GCP Sydney."
      >
        {/* graticule */}
        <g opacity="0.5">
          {[0, 1, 2, 3, 4].map((i) => {
            const y = PAD + (i * (H - PAD * 2)) / 4;
            return (
              <line
                key={`h${i}`}
                x1={PAD}
                y1={y}
                x2={W - PAD}
                y2={y}
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="2 6"
              />
            );
          })}
          {[0, 1, 2, 3, 4].map((i) => {
            const x = PAD + (i * (W - PAD * 2)) / 4;
            return (
              <line
                key={`v${i}`}
                x1={x}
                y1={PAD}
                x2={x}
                y2={H - PAD}
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="2 6"
              />
            );
          })}
        </g>

        {/* frame */}
        <rect className="frame" x={PAD} y={PAD} width={W - PAD * 2} height={H - PAD * 2} />

        {/* corner ticks */}
        <text className="tick" x={PAD} y={PAD - 10}>
          145°E
        </text>
        <text className="tick" x={W - PAD} y={PAD - 10} textAnchor="end">
          151°E
        </text>
        <text className="tick" x={PAD} y={H - PAD + 16}>
          38°S
        </text>

        {/* arcs from origin to each region */}
        {regions
          .filter((r) => !r.home)
          .map((r) => {
            const x = px(r.x);
            const y = py(r.y);
            const mx = (hx + x) / 2;
            const my = (hy + y) / 2 - Math.abs(x - hx) * 0.26;
            return (
              <path key={`a-${r.id}`} className="arc" d={`M ${hx} ${hy} Q ${mx} ${my} ${x} ${y}`} />
            );
          })}

        {/* nodes */}
        {regions.map((r) => {
          const x = px(r.x);
          const y = py(r.y);
          const flip = r.x > 62;
          return (
            <g key={r.id}>
              {r.home && (
                <circle
                  cx={x}
                  cy={y}
                  r="12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.6"
                />
              )}
              <circle className={r.home ? "node node--home" : "node"} cx={x} cy={y} r="4" />
              <text
                className="label--strong"
                x={flip ? x - 11 : x + 11}
                y={y - 1}
                textAnchor={flip ? "end" : "start"}
              >
                {r.label}
              </text>
              <text x={flip ? x - 11 : x + 11} y={y + 10} textAnchor={flip ? "end" : "start"}>
                {r.home ? r.note : r.id}
              </text>
            </g>
          );
        })}
      </svg>

      <figcaption
        id="plot-caption"
        style={{
          fontFamily: "var(--mono)",
          fontSize: "var(--t-micro)",
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          color: "var(--fg-faint)",
          marginTop: "12px",
          lineHeight: 1.6,
        }}
      >
        Fig. 1 — Regions the work below deploys into
      </figcaption>
    </figure>
  );
}
