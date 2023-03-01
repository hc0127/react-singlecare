import React, { useEffect } from 'react';
import {
  MDBNavbar,
  MDBModal,
  MDBModalDialog,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBModalContent,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Divider,
  Paper,
  IconButton,
  Button,
  Autocomplete,
  MenuItem,
  ListSubheader,
  Menu,
  Box ,
  Tab,
  TextField,
} from '@mui/material';

import{
  TabContext,
  TabList,
  TabPanel,
} from '@mui/lab';

import {
  Search,
  LocationOn,
  ArrowDropDownCircle
} from '@mui/icons-material';

export default function Medicine(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [modalOpen,setModalOpen] = React.useState(false);
  const [modaldata,setModalData] = React.useState(false);
  const [modalsendtype,setModalSendType] = React.useState('email');
  const [value, setValue] = React.useState('1');

  const open = Boolean(anchorEl);

  useEffect(() => {
  }, []);

  const options = [{
    label:'Amoxicillin',
  },{
    label:'Lisinopril (Zestril)',
  },{
    label:'Amoxicillin',
  },{
    label:'Amoxicillin',
  },{
    label:'Amoxicillin',
  }];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const tabChange = (event,newValue) => {
    setValue(newValue);
  };

  const print = () =>{

  }

  const setModal = (data) =>{
    setModalOpen(true);
    setModalData(data);
  }

  return (
    <>
      <MDBNavbar class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse">
            <a class="navbar-brand py-2 px-1" href="#">
              <img
                src="../logo.png"
                height="23"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </MDBNavbar>

      <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} className="py-5 px-1 section2_1">
        <Grid container xs={12} sm={9} md={6}  direction={"column"} alignItems={"center"} justifyContent={"center"}>
          <Grid item container spacing={2} direction={"row"} alignItems={"center"} justifyContent={"center"} className="mt-2">
              <Grid item md={4}>
                <Paper
                  className='p-2'
                  sx={{  display: 'flex', alignItems: 'center' }}
                >
                  <Grid container direction={"row"}  justifyContent={"center"} alignItems={"center"}>
                    <Grid item>
                      <IconButton aria-label="menu">
                        <LocationOn />
                      </IconButton>
                    </Grid>
                    <Grid item md={10} className='searchBox'>
                      <Autocomplete
                        sx={{
                          display: 'block',
                          '& input': {
                            width:'100%',
                            border:'none',
                            bgcolor: 'background.paper',
                            color: (theme) =>
                              theme.palette.getContrastText(theme.palette.background.paper),
                          },
                        }}
                        options={options}
                        renderInput={(params) => (
                          <div ref={params.InputProps.ref}>
                            <input type="text" placeholder='Search prescriptions' {...params.inputProps} />
                          </div>
                        )}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item md={8}>
                <Paper
                  className='p-2'
                  sx={{  display: 'flex', alignItems: 'center' }}
                >
                  <Grid container direction={"row"}  justifyContent={"space-between"} alignItems={"center"}>
                    <Grid item>
                      <IconButton aria-label="menu">
                        <Search />
                      </IconButton>
                    </Grid>
                    <Grid item md={8} className='searchBox p-1 m-1'>
                      <Autocomplete
                        sx={{
                          display: 'block',
                          '& input': {
                            width:'100%',
                            border:'none',
                            bgcolor: 'background.paper',
                            color: (theme) =>
                              theme.palette.getContrastText(theme.palette.background.paper),
                          },
                        }}
                        options={options}
                        renderInput={(params) => (
                          <div ref={params.InputProps.ref}>
                            <input type="text" placeholder='Search prescriptions' {...params.inputProps} />
                          </div>
                        )}
                      />
                    </Grid>
                    <Grid item>
                      <Button variant="outlined">Search</Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
          </Grid>
          <Grid item container direction={"column"} alignItems={"center"} justifyContent={"center"} className="mt-2">
            <Grid item container md={12} alignItems={"center"} justifyContent={"center"}>
                <Grid item>
                    <Paper className='p-2'>
                      <h2>Amoxicillin: Coupons, Prices & Discounts</h2>
                      <p>Amoxicillin is a type of antibiotic that is used to treat infections caused by bacteria. There is not an Amoxicillin generic drug currently available. The average price for Amoxicillin 125 mg is about $9 for a supply of 14 chewable tablets. Using our SingleCare savings card you can get up to 80% discount at participating pharmacies near you</p>
                      <Divider />
                      <Grid container direction={"row"} columnSpacing={2} className="p-2" alignItems={"center"} justifyContent={"flex-start"}>
                          <Grid item>
                            <label>Generic</label>
                          </Grid>
                          <Grid item>
                            <IconButton
                              onClick={handleClick}
                              aria-controls={open ? 'menu1' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                            >
                              <ArrowDropDownCircle />
                            </IconButton>
                            <Menu
                              anchorEl={anchorEl}
                              id="menu1"
                              open={open}
                              onClose={handleClose}
                              onClick={handleClose}
                              PaperProps={{
                                elevation: 0,
                                sx: {
                                  overflow: 'visible',
                                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                  mt: 1.5,
                                  '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                  },
                                },
                              }}
                              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            > 
                              <ListSubheader>Select Form1</ListSubheader>
                              <MenuItem onClick={handleClose}>
                                Add another account
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                Settings
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                Logout
                              </MenuItem>
                            </Menu>
                          </Grid>
                          <Grid item>
                            <label>Capsule </label>
                          </Grid>
                          <Grid item>
                            <IconButton
                              onClick={handleClick}
                              aria-controls={open ? 'menu2' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                            >
                              <ArrowDropDownCircle />
                            </IconButton>
                            <Menu
                              anchorEl={anchorEl}
                              id="menu2"
                              open={open}
                              onClose={handleClose}
                              onClick={handleClose}
                              PaperProps={{
                                elevation: 0,
                                sx: {
                                  overflow: 'visible',
                                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                  mt: 1.5,
                                  '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                  },
                                },
                              }}
                              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            > 
                              <ListSubheader>Select Form2</ListSubheader>
                              <MenuItem onClick={handleClose}>
                                Capsule 
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                Settings
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                Logout
                              </MenuItem>
                            </Menu>
                          </Grid>
                          <Grid item>
                            <label>500mg </label>
                          </Grid>
                          <Grid item>
                            <IconButton
                              onClick={handleClick}
                              aria-controls={open ? 'menu3' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                            >
                              <ArrowDropDownCircle />
                            </IconButton>
                            <Menu
                              anchorEl={anchorEl}
                              id="menu3"
                              open={open}
                              onClose={handleClose}
                              onClick={handleClose}
                              PaperProps={{
                                elevation: 0,
                                sx: {
                                  overflow: 'visible',
                                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                  mt: 1.5,
                                  '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                  },
                                },
                              }}
                              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            > 
                              <ListSubheader>Select Form3</ListSubheader>
                              <MenuItem onClick={handleClose}>
                                Capsule 
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                Settings
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                Logout
                              </MenuItem>
                            </Menu>
                          </Grid>
                          <Grid item>
                            <label>21 count  </label>
                          </Grid>
                          <Grid item>
                            <IconButton
                              onClick={handleClick}
                              aria-controls={open ? 'menu4' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                            >
                              <ArrowDropDownCircle />
                            </IconButton>
                            <Menu
                              anchorEl={anchorEl}
                              id="menu4"
                              open={open}
                              onClose={handleClose}
                              onClick={handleClose}
                              PaperProps={{
                                elevation: 0,
                                sx: {
                                  overflow: 'visible',
                                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                  mt: 1.5,
                                  '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                  },
                                },
                              }}
                              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            > 
                              <ListSubheader>Select Form4</ListSubheader>
                              <MenuItem onClick={handleClose}>
                                Capsule 
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                Settings
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                Logout
                              </MenuItem>
                            </Menu>
                          </Grid>
                      </Grid>
                    </Paper>
                </Grid>             
            </Grid>
          </Grid>
          <Grid item container direction={"column"} alignItems={"center"} justifyContent={"center"} className="mt-2">
            <Grid item sx={{width:'100%'}} className="mt-2">
              <Paper elevation={"3"} className="p-4">
                <Grid container direction={"row"}>
                  <Grid item container direciton={"row"} alignItems={"center"} justifyContent={"flex-start"}  md={6}>
                    <Grid item>
                      
                    </Grid>
                    <Grid item>
                      2.15miles away
                    </Grid>
                  </Grid>
                  <Grid item container direciton={"row"} alignItems={"center"} justifyContent={"flex-end"}  md={6}>
                    <Grid item>
                      <h4 className="p-2 m-1">$7.81</h4>
                    </Grid>
                    <Grid item>
                      <Button  variant="contained" className="py-3" color="success" onClick={() =>setModal({name:'amoxicillin', description:'21 capsule, 500mg for %5.63 at kronger Pharmacy'})}>Get Free Coupon</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item sx={{width:'100%'}} className="mt-2">
              <Paper elevation={"3"} className="p-4">
                <Grid container direction={"row"}>
                  <Grid item container direciton={"row"} alignItems={"center"} justifyContent={"flex-start"}  md={6}>
                    <Grid item>
                      
                    </Grid>
                    <Grid item>
                      2.15miles away
                    </Grid>
                  </Grid>
                  <Grid item container direciton={"row"} alignItems={"center"} justifyContent={"flex-end"}  md={6}>
                    <Grid item>
                      <h4 className="p-2 m-1">$7.81</h4>
                    </Grid>
                    <Grid item>
                      <Button  variant="contained" className="py-3" color="success" onClick={() =>setModal({name:'jolon'})}>Get Free Coupon</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item sx={{width:'100%'}} className="mt-2">
              <Paper elevation={"3"} className="p-4">
                <Grid container direction={"row"}>
                  <Grid item container direciton={"row"} alignItems={"center"} justifyContent={"flex-start"}  md={6}>
                    <Grid item>
                      
                    </Grid>
                    <Grid item>
                      2.15miles away
                    </Grid>
                  </Grid>
                  <Grid item container direciton={"row"} alignItems={"center"} justifyContent={"flex-end"}  md={6}>
                    <Grid item>
                      <h4 className="p-2 m-1">$7.81</h4>
                    </Grid>
                    <Grid item>
                      <Button  variant="contained" className="py-3" color="success" onClick={() =>setModal({name:'lisonpril'})}>Get Free Coupon</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
      <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} className="py-5 px-1 section2_2">
        <Grid container xs={12} sm={9} md={6}   direction={"column"} alignItems={"center"} justifyContent={"center"}>
          <Grid item>
            <h3>SingleCare partners with major pharmacies</h3>
          </Grid>
          <Grid item container direction={"row"} alignItems={"center"} justifyContent={"center"}>
            <Grid item>
              <svg className='cvs'/>
            </Grid>
            <Grid item>
            <svg className='target' />
            </Grid>
            <Grid item>
            <svg className='longs' />
            </Grid>
          </Grid>
          <Grid item container direction={"row"} alignItems={"center"} justifyContent={"center"}>
            <Grid item>
              <svg className='walmart'/>
            </Grid>
            <Grid item>
            <svg className='kronger' />
            </Grid>
            <Grid item>
            <svg className='frys' />
            </Grid>
          </Grid>
          <Grid item container direction={"row"} alignItems={"center"} justifyContent={"center"}>
            <Grid item>
              <svg className='harristeeter'/>
            </Grid>
            <Grid item>
            <svg className='walgreens' />
            </Grid>
            <Grid item>
            <svg className='duanereade' />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} className="py-5 px-1 section2_3">
        <Grid container xs={12} sm={9} md={6}  direction={"column"} justifyContent={"center"} alignItems={"center"} >
          <Grid item md={4} className="mb-2">
            <Box>HOW TO GET THE MOST FROM YOUR AMOXICILLIN COUPON</Box>
          </Grid>
          <Grid item md={6}  className="mb-2">
            <Paper elevation={0} >
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="primary" >
                      What is the price of Amoxicillin without insurance?
                    </Typography>
                    <Typography>
                    The average retail cost of Amoxicillin 125 mg chewable without insurance is about $9 for a supply of 14 tablets. The cost may vary depending on your daily dosage, your insurance coverage and the pharmacy where you shop.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
          <Grid className="mb-2">
            <Paper elevation={0} >
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="primary" >
                    Where can I use SingleCare’s Amoxicillin coupon?
                    </Typography>
                    <Typography>
                      The SingleCare Amoxicillin coupon card is accepted at most U.S. pharmacies including Walmart, CVS pharmacy, Rite Aid and Walgreens for up to 80% discount on your Amoxicillin prescription. To check if your pharmacy accepts SingleCare coupons, enter the zip code and see if it appears in the search results. You can also bring your SingleCare discount card to your local pharmacy and with your permission the pharmacist will process your prescription using the BIN and PCN number on your card.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
          <Grid className="mb-2">
            <Paper elevation={0} >
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="primary" >
                    Is there a generic version of Amoxicillin?
                    </Typography>
                    <Typography>
                    Amoxicillin is a generic drug. Similar brand-name drugs include Amoxil, Moxilin and Trimox. You can use our free pharmacy discount card to reduce the cost of your medication by up to 80% of the retail price.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
          <Grid className="mb-2">
            <Paper elevation={0} >
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="primary" >
                    How else can I save on Amoxicillin?
                    </Typography>
                    <Typography>
                    There is no Amoxicillin manufacturer coupons and patients assistance programs currently available; however, you can save on your Amoxicillin prescription cost by using our free Amoxicillin coupon card. It is free and easy to use. Customers find they save the most on medications when they use our coupons.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      
      <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} className="py-5 px-1 section2_4">
        <Grid container xs={12} sm={9} md={6}  direction={"column"} justifyContent={"center"} alignItems={"flex-start"}>
          <Grid item>
            <h3>Amoxicillin</h3>
          </Grid>
          <Grid item>
            <h3><i>a-mox-i-SIL-in</i></h3>
          </Grid>
          <Grid item container direction={"row"} columnSpacing={4} justifyContent={"flex-start"} alignItems={"flex-start"} className="mt-3">
            <Grid item direction={"column"} md={"4"}>
              <Grid item>
                <p>CONSUMER FORMS</p>
              </Grid>
              <Grid item>
                <span>Chewable Tablet, Long Acting Tablet, Tablet,<br />Capsule, Liquid</span>
              </Grid>
            </Grid>
            <Grid item direction={"column"} md={"4"}>
              <Grid item>
                <p>CONSUMER ROUTES</p>
              </Grid>
              <Grid item>
                <span>By mouth</span>
              </Grid>
            </Grid>
            <Grid item direction={"column"} md={"4"}>
              <Grid item>
                <p>THERAPEUTIC CLASSES</p>
              </Grid>
              <Grid item>
                <span>Antibiotic</span>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction={"column"}  justifyContent={"center"} alignItems={"center"}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={tabChange} aria-label="lab API tabs example" textColor="secondary" indicatorColor="secondary">
                  <Tab label="Uses" value="1" />
                  <Tab label="Directions" value="2" />
                  <Tab label="Warnings" value="3" />
                  <Tab label="Side Effects" value="4" />
                  <Tab label="Avoid" value="5" />
                  <Tab label="Storage" value="6" />
                </TabList>
              </Box>
              <TabPanel value="1">Item One</TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
              <TabPanel value="3">Item Three</TabPanel>
              <TabPanel value="4">Item Four</TabPanel>
              <TabPanel value="5">Item Five</TabPanel>
              <TabPanel value="6">Item Six</TabPanel>
            </TabContext>
          </Grid>
          <Grid item container direction={"column"} justifyContent={"center"} alignItems={"center"} className="py-5 px-1 section2_4_5" >
            <Grid item>
              <h3 className='mb-3'>Saving on prescriptions has never been easier</h3>
            </Grid>
            <Grid item container direction={"row"} justifyContent={"center"} alignItems={"center"}>
              <Grid item container md={4} direction={"column"} justifyContent={"center"} alignItems={"center"}>
                <Grid item>
                  <div className='step1'></div>
                </Grid>
                <Grid item>
                  <p>STEP ONE</p>
                </Grid>
                <Grid item>
                  <span>Find your prescription</span>
                </Grid>
              </Grid>
              <Grid item container md={4} direction={"column"} justifyContent={"center"} alignItems={"center"}>
                <Grid item>
                  <div className='step2'></div>
                </Grid>
                <Grid item>
                  <p>STEP TWO</p>
                </Grid>
                <Grid item>
                  <span>Compare pricing</span>
                </Grid>
              </Grid>
              <Grid item container md={4} direction={"column"} justifyContent={"center"} alignItems={"center"}>
                <Grid item>
                  <div className='step3'></div>
                </Grid>
                <Grid item>
                  <p>STEP THREE</p>
                </Grid>
                <Grid item>
                  <span>Save at the pharmacy</span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
      <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} className="py-3 px-1 section2_5">
        <Grid container xs={12} sm={9} md={6}  direction={"column"} justifyContent={"center"} alignItems={"flex-start"}>
          <Grid item>
            <Typography>
              <p><span>© 2023 SingleCare Administrators. All Rights Reserved.</span></p>
              <p>* Prescription savings vary by prescription and by pharmacy, and may reach up to 80% off cash price.</p>
              <p>Pharmacy names, logos, brands, and other trademarks are the property of their respective owners.</p>
              <p>This is not insurance. This is a discount prescription drug card and it's free to our members. If assistance is needed, please call the help line at 844-234-3057.</p>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      
      <MDBModal show={modalOpen} setShow={setModalOpen} tabIndex='-1' className='section2_modal'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <Grid container direction={"column"}>
                <Grid item>
                  <img src='../logo.png' width='100px'/>
                </Grid>
                <Grid item container direciton={"column"} alignItems={"center"} justifyContent={"center"}>
                  <Grid item>
                    <MDBModalTitle>{modaldata?.name}</MDBModalTitle>
                  </Grid>
                  <Grid item>
                    <span>{modaldata?.description}</span>
                  </Grid>
                </Grid>
              </Grid>
              <Button></Button>
            </MDBModalHeader>
            <MDBModalBody>
              <Grid container direction={"column"} alignItems={"center"}>
                <Grid item>
                  <p>Send this card to yourself or print and bring to the pharmacy</p>
                </Grid>
                <Grid item>
                  <div className='card_image'></div>
                </Grid>
                <Grid item container direction={"row"} columnSpacing={"4"} alignItems={"center"} justifyContent={"center"} className="mt-2 selections">
                  <Grid item>
                    <Button variant='outlined' onClick={()=>setModalSendType('phone')}>Text</Button>
                  </Grid>
                  <Grid item>
                    <Button variant='outlined' onClick={()=>setModalSendType('email')}>Email</Button>
                  </Grid>
                  <Grid item>
                    <Button variant='outlined' onClick={()=>print()}>Print</Button>
                  </Grid>
                </Grid>
                <Grid item container direction={"row"} columnSpacing={2} alignItems={"center"} justifyContent={"center"} className="mt-2">
                  <Grid item>
                    <TextField
                      label={modalsendtype=="email"?"Email address":"Phone number"}
                      size="small"
                      variant="standard"
                      required
                    />
                  </Grid>
                  <Grid item>
                    <Button variant='outlined'>Send</Button>
                  </Grid>
                </Grid>
                <Grid item className='mt-2'>
                  <span>By clicking "Send". I agree to Singlecare's Terms & Conditions.</span>
                </Grid>
              </Grid>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}