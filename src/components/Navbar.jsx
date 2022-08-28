import {
    Text,
    Flex,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
    Img
  } from '@chakra-ui/react';
  import {
  
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import {useNavigate} from 'react-router-dom';
import Droplist from './droplist';
import Droplist1 from './droplist1';
  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    
    return (
      <Text position={'fixed'} width='100%' zIndex='9999'>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
          alignContent={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start'  }} gap='100px' paddingLeft={'80px'} >
            
               <Link href='/'><Img src="https://tmetric.com/images/v3/tmetric_logo_with_text.svg" alt="logo"/></Link>

            <Flex display={{ base: 'none', md: 'flex' }} ml={10} paddingRight="50px">
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              as={'a'}
              fontSize={'md'}
              fontWeight={500}
              _hover={{
                color: 'rgb(48,112,240)'
              }}
              variant={'link'}
              href={'/login'}
              >
              Log In
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'md'}
              fontWeight={600}
              variant={'outline'}
              color={'rgb(48,112,240)'}
              href={'/signup'}
              _hover={{
                bg: 'rgb(48,112,240)', color: 'white'
              }}>
              Sign Up
            </Button>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Text>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
    const navigate=useNavigate();
    return (
      <Stack direction={'row'} spacing={4}>
 
          <Text  >
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: "blue",
                  }}>
                    Why TMetric <ChevronDownIcon/> 
                </Link>
              </PopoverTrigger>
                <PopoverContent
                  border={0}
                  width="100%"
                  padding='50px'
                  TextShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  >
                    <Droplist/>
                </PopoverContent>
            </Popover>
          </Text>
          <Text  >
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: "blue",
                  }}>
                     Apps & Integrations <ChevronDownIcon/>
                </Link>
              </PopoverTrigger>
                <PopoverContent
                  border={0}
                  width="100%"
                  padding='50px'
                  TextShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  >
                    <Droplist1/>
                </PopoverContent>
            </Popover>
          </Text>
          <Text>
          <Link fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: "blue",
                  }}
                  onClick={()=>navigate('/Pricing')}>Pricing</Link>
          </Text>
          <Text>
          <Link fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: "blue",
                  }}
                  onClick={()=>navigate('/')}>Contact</Link>
          </Text>
          <Text>
          <Link fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: "blue",
                  }}
                  onClick={()=>navigate('/')}>Blog</Link>
          </Text>
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('white', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Text>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'rgb(48,112,240)' }}
              >
              {label}
            </Text>
            <Text fontSize={'md'}>{subLabel}</Text>
          </Text>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'rgb(48,112,240)'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
   
  
  const NAV_ITEMS = [
    {
      label: 'Why TMetric ',
      children: [
        {
          label: 'Time Tracking',
          subLabel: 'Capture and control every task you work on',
          href: '#',
        },
        {
          label: 'Team Mangement',
          subLabel: 'Monitor productivity and activity level of your team',
          href: '#',
        },
      ],
    },
    {
      label: 'Apps & Integrations ',
      children: [
        {
          label: 'Job Board',
          subLabel: 'Find your dream design job',
          href: '#',
        },
        {
          label: 'Freelance Projects',
          subLabel: 'An exclusive list for contract work',
          href: '#',
        },
      ],
    },
    {
      label: 'Pricing',
      href: '#',
    },
    {
      label: 'Support',
      href: '#',
    },
    {
        label: 'Blog',
        href: '#',
    },
  ];