import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Box,
  Tooltip,
} from "@chakra-ui/react"
import { InfoIcon } from "@chakra-ui/icons"
import { TimerSettingProps } from "../util/types"

const LongBreakSetting = (props: TimerSettingProps) => {
  const { timerSettings, setTimerSettings } = props
  return (
    <Box p="4" pl="9" pr="16" display="flex" mb="2">
      <Box w="75%" display="flex">
        <Box pt="8px">Long Break Interval</Box>
        <Box ml="3" pt="6px">
          <Tooltip
            pb="2"
            pl="4"
            pr="4"
            pt="2"
            textAlign="center"
            label="Number of intervals before a long break. Each interval consists of a work period and a short break."
          >
            <InfoIcon />
          </Tooltip>
        </Box>
      </Box>
      <Box w="25%">
        <NumberInput
          value={timerSettings.numBreaks}
          onChange={(_, num) => {
            setTimerSettings({
              ...timerSettings,
              numBreaks: num,
            })
          }}
          max={999}
          min={0}
          keepWithinRange={true}
          size="md"
          clampValueOnBlur={false}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Box>
    </Box>
  )
}

export default LongBreakSetting
