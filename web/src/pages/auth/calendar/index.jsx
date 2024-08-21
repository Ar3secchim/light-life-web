'use client';

import { ptBR } from 'date-fns/locale';
import { useState } from 'react';
import { Calendar } from '../../../components/calendar';
import LayoutRoot from '../layout';

function CalendarPage() {
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

export default CalendarPage;
