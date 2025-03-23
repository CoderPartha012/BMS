import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

type ShortcutMap = {
  [key: string]: () => void;
};

export function useKeyboardShortcuts(shortcuts: ShortcutMap) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      // Check if user is typing in an input field
      if (event.target instanceof HTMLInputElement || 
          event.target instanceof HTMLTextAreaElement) {
        return;
      }

      const key = event.key.toLowerCase();
      const modifier = event.ctrlKey || event.metaKey;

      // Format: ctrl+k or cmd+k
      const shortcutKey = modifier ? `ctrl+${key}` : key;

      if (shortcuts[shortcutKey]) {
        event.preventDefault();
        shortcuts[shortcutKey]();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);
}

export function useDefaultShortcuts() {
  const router = useRouter();

  return useKeyboardShortcuts({
    'ctrl+k': () => document.getElementById('global-search')?.focus(),
    'd': () => router.push('/'),
    'w': () => router.push('/workforce'),
    'p': () => router.push('/payroll'),
    'c': () => router.push('/cashbook'),
    'r': () => router.push('/reports'),
    's': () => router.push('/settings'),
  });
}