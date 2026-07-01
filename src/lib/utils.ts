export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export function formatDateYmd(date: Date) {
    return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
}
