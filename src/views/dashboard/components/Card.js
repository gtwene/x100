import { Card, Image, Text, Badge, Button, Group, Grid, SimpleGrid  } from '@mantine/core';
import { MDBIcon } from 'mdb-react-ui-kit';
import Modal from '../../../components/Modal';

export default function CustomCard({ title, description, iconName, iconColor, btnName, setOpened, cardBGColor }) {
  return (
    <>

    <div className='ccard cursor-pointer'>
       <Card className='shadow-2 ccard ccardC cardHeight' style={{ height: "145px", overflowY: "scroll", zIndex: "-1" }} shadow="sm" p="md" radius="md" withBorder>

            <Group className='-mt-1' style={{ whiteSpace: "nowrap", overflow: "scroll" }} position="apart" mt="md" mb="sm">
                <Text className='dashboardCardText' style={{ fontSize: "18px" }} weight={500}>{ title }</Text>
                <Badge color={iconColor} style={{ padding: "15px" }} variant="light">
                <MDBIcon className='dashboardCardIcon' style={{ fontSize: "23px" }} icon={iconName} />
                </Badge>
            </Group>

            <Text size="sm" className='dashboardCardText1' style={{ textOverflow: "ellipsis", width: "auto", whiteSpace: "nowrap", overflow: "hidden" }} color="dimmed">
                { description }
            </Text>

            <Button className='dashboardCardText2' onClick={() => setOpened(true) } variant="light" color="blue" fullWidth mt="md" radius="md">
                { btnName }
            </Button>
        </Card>
      </div>

      </>
  );
}