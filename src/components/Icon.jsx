import {
  Book,
  Camera,
  Coffee,
  Heart,
  Home,
  Music,
  Palette,
  Plane,
  Smile,
  Sparkles,
  Star,
  Sun,
} from 'lucide-react';

/*
 * Icon
 * ----
 * Lets the data files choose an icon by name (a simple string).
 * Example: <Icon name="heart" /> — see the iconMap below for valid names.
 */
const iconMap = {
  heart: Heart,
  sparkles: Sparkles,
  star: Star,
  coffee: Coffee,
  music: Music,
  camera: Camera,
  book: Book,
  sun: Sun,
  smile: Smile,
  palette: Palette,
  plane: Plane,
  home: Home,
};

export default function Icon({ name, size = 22, ...rest }) {
  const Component = iconMap[name] || Heart;
  return <Component size={size} {...rest} />;
}
