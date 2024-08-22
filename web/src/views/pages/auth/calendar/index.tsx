import { Calendar } from '@views/components/ui/calendar';
import { LayoutRoot } from '@views/pages/Layout/layoutRoot';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';

export function CalendarPage() {
  const [date, setDate] = useState(new Date());

  return (
    <LayoutRoot>
      <Calendar
        locale={ptBR}
        mode="single"
        selected={date}
        onSelect={setDate}
      />
    </LayoutRoot>
  );
}
