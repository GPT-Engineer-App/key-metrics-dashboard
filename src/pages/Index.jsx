import { Box, Flex, Grid, GridItem, Heading, Stat, StatLabel, StatNumber, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa";

const Index = () => {
  const cardBg = useColorModeValue("gray.100", "gray.700");

  const MetricCard = ({ icon, title, value }) => {
    return (
      <VStack p={4} bg={cardBg} boxShadow={"md"} borderRadius="lg" align="stretch" spacing={4}>
        <Box fontSize="3xl" color="teal.500">
          {icon}
        </Box>
        <Stat>
          <StatLabel>{title}</StatLabel>
          <StatNumber>{value}</StatNumber>
        </Stat>
      </VStack>
    );
  };

  return (
    <Box p={8}>
      <Heading mb={6}>Business Dashboard</Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem>
          <MetricCard icon={<FaShoppingCart />} title="Total Sales" value="1,024" />
        </GridItem>
        <GridItem>
          <MetricCard icon={<FaDollarSign />} title="Total Revenue" value="$89,400" />
        </GridItem>
        <GridItem>
          <MetricCard icon={<FaChartLine />} title="Conversion Rate" value="12.5%" />
        </GridItem>
        <GridItem>
          <MetricCard icon={<FaUsers />} title="New Customers" value="86" />
        </GridItem>
      </Grid>
      <Flex mt={10} justifyContent="space-between">
        <Box p={5} boxShadow={"md"} borderRadius="lg" bg={cardBg} width="48%">
          <Heading size="md" mb={4}>
            Sales Over Time
          </Heading>
          {/* Placeholder for chart */}
          <Text align="center" mt={10}>
            [Chart Placeholder]
          </Text>
        </Box>
        <Box p={5} boxShadow={"md"} borderRadius="lg" bg={cardBg} width="48%">
          <Heading size="md" mb={4}>
            Revenue Breakdown
          </Heading>
          {/* Placeholder for chart */}
          <Text align="center" mt={10}>
            [Chart Placeholder]
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
