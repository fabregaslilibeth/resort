import { permanentRedirect } from 'next/navigation';

// The restaurant is the dining page now.
export default function RestaurantPage() {
  permanentRedirect('/dining');
}
