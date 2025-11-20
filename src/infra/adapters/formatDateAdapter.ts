import { formatDate, formatToDate } from "@arkyn/shared";

class FormatDateAdapter {
  static format(date: Date): string {
    return formatDate(date.toISOString().split("T"), "isoDate", "MM-DD-YYYY");
  }

  static toDate(dateString: string): Date {
    return formatToDate(dateString.split("T"), "isoDate");
  }
}

export { FormatDateAdapter };
