import * as Icons from "./Icon";

const map: Record<string, (p: { className?: string }) => JSX.Element> = {
  seat: Icons.Seat,
  cube: Icons.Cube,
  clock: Icons.Clock,
  bolt: Icons.Bolt,
  users: Icons.Users,
  target: Icons.Target,
  refresh: Icons.Refresh,
  mail: Icons.Mail,
  doc: Icons.Doc,
  search: Icons.Search,
  chart: Icons.Chart,
  send: Icons.Send,
  wrench: Icons.Wrench,
  globe: Icons.Globe,
  shield: Icons.Shield,
  play: Icons.Play,
  eye: Icons.Eye,
  sparkle: Icons.Sparkle,
  check: Icons.Check,
  star: Icons.Star,
  gauge: Icons.Gauge,
  upload: Icons.Upload,
  pause: Icons.Pause,
};

export function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? Icons.Sparkle;
  return <Cmp className={className} />;
}
