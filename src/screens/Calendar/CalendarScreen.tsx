import React, { useCallback, useRef, useState } from "react";
import { Dimensions, View } from "react-native";
import LinearContainer from "../../components/LinearContainer";
import { useAppTheme } from "../../utils/theme";
import {
  AgendaList,
  Calendar,
  CalendarProvider,
  ExpandableCalendar,
  WeekCalendar,
} from "react-native-calendars";
import { agendaItems as ITEMS, getMarkedDates } from "./utils/agendaItem";
import AgendaItem from "./AgendaItem";

const WIDTH = Dimensions.get("screen").width;

const CalendarScreen = ({ weekView }) => {
  const { colors } = useAppTheme();
  const [selected, setSelected] = useState("");
  const marked = useRef(getMarkedDates());

  const renderItem = useCallback(({ item }: any) => {
    return <AgendaItem item={item} />;
  }, []);

  return (
    <LinearContainer
      colors={[colors.primaryContainer, colors.surfaceVariant]}
      style={{ padding: 0 }}>
      <CalendarProvider date={ITEMS[1]?.title}>
        {weekView ? (
          <WeekCalendar firstDay={1} />
        ) : (
          <ExpandableCalendar
            // horizontal={false}
            // hideArrows
            // disablePan
            // hideKnob
            // initialPosition={ExpandableCalendar.positions.OPEN}
            // calendarStyle={styles.calendar}
            // headerStyle={styles.header} // for horizontal only
            // disableWeekScroll

            // disableAllTouchEventsForDisabledDays
            firstDay={1}
            markedDates={marked.current}

            // animateScroll
            // closeOnDayPress={false}
          />
        )}

        <AgendaList
          sections={ITEMS}
          renderItem={renderItem}
          // scrollToNextEvent
          // dayFormat={'yyyy-MM-d'}
        />
      </CalendarProvider>
    </LinearContainer>
  );
};

export default CalendarScreen;

{
  /* <Calendar
  onDayPress={(day) => {
    setSelected(day.dateString);
  }}
  markedDates={{
    [selected]: {
      selected: true,
      disableTouchEvent: true,
    },
  }}
  style={{ borderRadius: 16 }}
/>; */
}
