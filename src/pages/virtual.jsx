import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  MDBNavbar,
} from "mdb-react-ui-kit";
import {
  Grid,
  Link,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Paper,
  IconButton,
  Button,
  Autocomplete,
  Backdrop,
  CircularProgress,
  Zoom
} from '@mui/material';
import {
  Search,
  ArrowForwardIos,
  ArrowBackIos
} from '@mui/icons-material';

import Carousel from 'react-material-ui-carousel'

import axios from '../config/server.config';

export default function Virtual(props) {
  const [popularMedicineData, setPopularMedicineData] = React.useState([]);
  const [pricings, setPricings] = React.useState([]);
  const [medicineData, setMedicineData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [selMidicine, setSelMedicine] = React.useState(0);
  const [effect, setEffect] = React.useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get('v1/popular')
      .then(function (res) {
        console.log(res);
        setPopularMedicineData(res.data.popular_now);
        setMedicineData(res.data.popular_now);
        setPricings(res.data.sample_pricing);
        setLoading(false);
      });
  }, []);

  const setSearchResult = (e, val) => {
    if (val == "") {
      setMedicineData(popularMedicineData);
    } else {
      axios
        .get('v1/search?q=' + e.target.value)
        .then(function (res) {
          setMedicineData(res.data);
        });
    }
  }
  const goDetail = (e, val) => {
    navigate("/virtualme/" + val.seo_name);
  }

  const changePricing = async (e) => {
    setEffect(true);
    setSelMedicine(e)
    setTimeout(() => {
      setEffect(false);
   }, 1000)
  }

  const Medicine = (props) => {
    return (
      <Paper className='text-center'>
        <Grid container direction={"column"} alignContent={"center"}>
          <Grid item md={12}>
            <span className='carousel_header'>SAMPLE PRICING FOR</span>
          </Grid>
          <Grid item md={12}>
            <Link href={"/virtualme/" + props.item.name} className='secondary'>{props.item.name}</Link>
          </Grid>
          <Grid item md={12}>
            <span>{props.item.amt}</span>
          </Grid>
        </Grid>
      </Paper>
    );
  }

  return (
    <div className='page1'>
      <MDBNavbar className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <a className="navbar-brand py-2 px-1" href="#">
              <img
                src="logo.png"
                height="23"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </MDBNavbar>

      <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} className="py-5 section1_1">
        <Grid item container sm={12} md={10} lg={6} xl={3} direction={"column"} alignItems={"center"} justifyContent={"center"}>
          <Grid item>
            <h1 className='white'>Save up to 80%* on your prescriptions</h1>
          </Grid>
          <Grid item>
            <p className='white'>Find your prescriptions to see how much you'll save</p>
          </Grid>
          <Grid item sx={{ width: '75%' }}>
            <Paper
              className='p-2'
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Grid item>
                  <IconButton aria-label="menu">
                    <Search />
                  </IconButton>
                </Grid>
                <Grid item md={8} className='searchBox'>
                  <Autocomplete
                    sx={{
                      display: 'block',
                      '& input': {
                        width: '100%',
                        border: 'none',
                        bgcolor: 'background.paper',
                        color: (theme) =>
                          theme.palette.getContrastText(theme.palette.background.paper),
                      },
                    }}
                    options={medicineData}
                    onInputChange={(e, val) => setSearchResult(e, val)}
                    onChange={(e, val) => goDetail(e, val)}
                    onBlur={() => setMedicineData(popularMedicineData)}
                    getOptionLabel={option => option.display_name}

                    renderInput={(params) => (
                      <div ref={params.InputProps.ref}>
                        <input type="text" placeholder='Search prescriptions' {...params.inputProps} />
                      </div>
                    )}
                  />
                </Grid>
                <Grid item>
                  <Button variant="outlined" className='primary search'>Search</Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>

      <Grid container direction={"row"} justifyContent={"center"} alignItems={"flex-start"} className="py-3 section1_2">
        <Grid item container sm={8} md={8} lg={6} xl={3} direction={"column"} alignItems={"center"} justifyContent={"flex-start"}>
          <Grid item sx={{ width: '100%' }}>
            <Carousel onChange={(e) => changePricing(e)} autoPlay={false} duration={800} navButtonsAlwaysVisible={true} indicators={false} className="carousel">
              {
                pricings.length !== 0 && pricings.map((medicine, index) => <Medicine key={index} item={medicine} />)
              }
            </Carousel>
          </Grid>
          <Grid item >
            <Zoom in={true} style={{ transitionDelay: '0ms' }}>
              <div className={effect ? 'green_pin text-center fade_effect' : 'green_pin text-center'}>{pricings.length !== 0 && pricings[selMidicine]?.price_green_pin}</div>
            </Zoom>
            {
              pricings.length !== 0 && pricings[selMidicine].prices_grey_pin?.map((grey_pin, index) => {
                return <Zoom in={true} style={{ transitionDelay: '2000ms' }}>
                  <div key={index} className={effect ? ' fade_effect grey_pin grey_pin' + index : 'grey_pin grey_pin' + index}>{grey_pin}</div>
                </Zoom>
              })
            }
          </Grid>
        </Grid>
      </Grid>

      <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} className="py-5 section1_3">
        <Grid item container sm={10} md={8} xl={6} direction={"column"} alignItems={"center"} justifyContent={"center"}>
          <Grid item>
            <h3 className='mb-3'>Saving on prescriptions has never been easier</h3>
          </Grid>
          <Grid item container direction={"row"} justifyContent={"space-around"} alignItems={"center"}>
            <Grid item container sm={4} md={4} direction={"column"} justifyContent={"center"} alignItems={"center"}>
              <Grid item>
                <Zoom in={true} style={{ transitionDelay: '1000ms' }}>
                  <div className='step1'></div>
                </Zoom>
              </Grid>
              <Grid item>
                <p>STEP ONE</p>
              </Grid>
              <Grid item>
                <span>Find your prescription</span>
              </Grid>
            </Grid>
            <Grid item container sm={4} md={4} direction={"column"} justifyContent={"center"} alignItems={"center"}>
              <Grid item>
                <Zoom in={true} style={{ transitionDelay: '1000ms' }}>
                  <div className='step2'></div>
                </Zoom>
              </Grid>
              <Grid item>
                <p>STEP TWO</p>
              </Grid>
              <Grid item>
                <span>Compare pricing</span>
              </Grid>
            </Grid>
            <Grid item container sm={4} md={4} direction={"column"} justifyContent={"center"} alignItems={"center"}>
              <Grid item>
                <Zoom in={true} style={{ transitionDelay: '1000ms' }}>
                  <div className='step3'></div>
                </Zoom>
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

      <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} className="py-5 section1_4">
        <Grid item container sm={10} md={8} xl={6} direction={"column"} alignItems={"center"} justifyContent={"center"}>
          <Grid item className="mb-2">
            <h3>Prescription FAQs</h3>
          </Grid>
          <Grid item className="mb-2">
            <Paper elevation={1} className="p-3">
              <Typography gutterBottom variant="h5" component="div" className='secondary question_header'>
                What pharmacies accept SingleCare?
              </Typography>
              <Typography>
                Our pharmacy savings card is accepted nationwide at over 35,000 pharmacies, including CVS, Target, Longs Drugs, Walmart, Kroger, Fry's, Harris Teeter, Walgreens, Duane Reade and many more. Simply bring your SingleCare card to the pharmacy and ask the pharmacist to process your prescription using the BIN and PCN number found on your card.
                To look up a drug price or to see if your pharmacy accepts SingleCare, search for your prescription at the top of this page. You can also search for your prescription on the SingleCare app, available for both Android and iOS.
              </Typography>
            </Paper>
          </Grid>
          <Grid item className="mb-2">
            <Paper elevation={1} className="p-3">
              <Typography gutterBottom variant="h5" component="div" className='secondary question_header'>
                Why did I receive a prescription savings card?
              </Typography>
              <Typography>
                We work with a series of partners to help identify Americans who could benefit from SingleCare's prescription savings. We believe all Americans should have access to the healthcare savings that SingleCare provides, so we invite individuals nationwide.
              </Typography>
            </Paper>
          </Grid>
          <Grid item className="mb-2">
            <Paper  elevation={1} className="p-3">
              <Typography gutterBottom variant="h5" component="div" className='secondary question_header'>
                Are over-the-counter medications covered?
              </Typography>
              <Typography>
                SingleCare's prescription benefit only covers prescription medications. Some over-the-counter drugs, such as Advil, have stronger forms that require a prescription, and that form may be covered.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>

      <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} className="py-3 px-1 section1_5">
        <Grid item container xs={12} sm={9} md={6} direction={"column"} justifyContent={"center"} alignItems={"flex-start"}>
          <Grid item>
            <p>© 2023 SingleCare Administrators. All Rights Reserved.</p>
            <p>* Prescription savings vary by prescription and by pharmacy, and may reach up to 80% off cash price.</p>
            <p>Pharmacy names, logos, brands, and other trademarks are the property of their respective owners.</p>
            <p>This is not insurance. This is a discount prescription drug card and it's free to our members. If assistance is needed, please call the help line at 844-234-3057.</p>
          </Grid>
        </Grid>
      </Grid>

      {/* <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} className="py-5 section1_5">
        <Grid container item md={7} direction={"row"} alignItems={"flex-start"} justifyContent={"center"}>
          <Grid item container direction={"column"} md={3}>
            <Grid item>
              <h5 className='mb-2'>SINGLECARE</h5>
            </Grid>
            <Grid item>
              <span>Browse spanrescrispantions</span>
            </Grid>
            <Grid item>
              <span>SingleCare Discount Cards</span>
            </Grid>
            <Grid item>
              <span>About Us</span>
            </Grid>
            <Grid item>
              <span>Blog</span>
            </Grid>
            <Grid item>
              <span>Terms & Conditions</span>
            </Grid>
            <Grid item>
              <span>spanrivacy spanolicy</span>
            </Grid>
            <Grid item>
              <span>Careers</span>
            </Grid>
            <Grid item>
              <span>FAQ</span>
            </Grid>
          </Grid>
          <Grid item container direction={"column"} justifyContent={"center"} alignItems={"flex-start"} md={3}>
            <Grid item className='mb-2'>
              <h5>SUPPORT</h5>
            </Grid>
            <Grid item className='mb-2'>
              <span>Contact us</span>
            </Grid>
            <Grid item>
              <span>24 Hours, 7 Days a Week</span>
            </Grid>
            <Grid item className='mb-2'>
              <span>(Except Major Holidays)</span>
            </Grid>
            <Grid item>
              <span>Customer Support</span>
            </Grid>
            <Grid item className='mb-2'>
              <span>844-234-3057</span>
            </Grid>
            <Grid item>
              <span>Provider Support</span>
            </Grid>
            <Grid item>
              <span>800-960-6918</span>
            </Grid>

          </Grid>
          <Grid item container direction={"column"} justifyContent={"center"} alignItems={"flex-start"} md={3}>
            <Grid item className='mb-2'>
              <h5>MEDIA INQUIRIES</h5>
            </Grid>
            <Grid item className='mb-2'>
              <span>Contact us</span>
            </Grid>
            <Grid item className='mb-2'>
              <h5>SOCIAL</h5>
            </Grid>
            <Grid item container direction={"row"} justifyContent={"flex-start"} spacing={2} alignItems={"center"} >
              <Grid item><Link target="_blank" href="https://www.facebook.com/SingleCare?ref=public_footer"><span className="social facebook"></span></Link></Grid>
              <Grid item><Link target="_blank" href="https://www.instagram.com/singlecare/?hl=en"><span className="social instagram"></span></Link></Grid>
              <Grid item><Link target="_blank" href="https://www.linkedin.com/company/9402625"><span className="social linkedin"></span></Link></Grid>
              <Grid item><Link target="_blank" href="https://www.linkedin.com/company/9402625"><span className="social twitter"></span></Link></Grid>
              <Grid item><Link target="_blank" href="https://www.trustpilot.com/review/www.singlecare.com"><span className="social trustpilot"></span></Link></Grid>
            </Grid>
          </Grid>
          <Grid item container direction={"column"} justifyContent={"center"} alignItems={"flex-start"} md={3}>
            <Grid item className='mb-2'><Link target="_blank" href="https://www.safe.pharmacy/buying-safely/"><span className="store pharmacy"></span></Link></Grid>
            <Grid item className='mb-2'><Link><span className="store instagram"></span></Link><span className="store bbb"></span></Grid>
            <Grid item className='mb-2'><Link target="_blank" href="https://apps.apple.com/us/app/singlecare/id988894598"><span className="store appstore"></span></Link></Grid>
            <Grid item className='mb-2'><Link target="_blank" href="https://play.google.com/store/apps/details?id=com.singlecare.scma&hl=en_US"><span className="store googleplay"></span></Link></Grid>
          </Grid>
          <Grid item justifyContent={"center"} alignItems={"center"} className="mt-4">
              <p>© 2023 SingleCare Administrators. All Rights Reserved.</p>
              <p>* Prescription savings vary by prescription and by pharmacy, and may reach up to 80% off cash price.</p>
              <p>Pharmacy names, logos, brands, and other trademarks are the property of their respective owners.</p>
              <p>This is a prescription discount plan. This is NOT insurance nor a Medicare prescription drug plan. The range of discounts for prescriptions provided under this discount plan will vary depending on the prescription and the pharmacy where the prescription is purchased and may reach up to 80% off the cash price. You are fully responsible for paying for your prescriptions at the pharmacy at the time of service but will be entitled to receive a discount from the pharmacy in accordance with the specific pre-negotiated discounted fee schedule. Towers Administrators LLC (doing business as "SingleCare Administrators") is the licensed prescription discount plan organization with its administrative office located at 4510 Cox Road, Suite 111, Glen Allen, VA 23060. SingleCare Services LLC ("SingleCare") is the marketer of the prescription discount plan including its website located at www.singlecare.com. For additional information, including an up-to-date list of pharmacies, or assistance with any issue related to this prescription discount plan, please contact customer support by calling toll-free 844-234-3057, 24 hours, 7 days a week (except major holidays). By using the SingleCare prescription discount card or app, you are agreeing to the SingleCare Terms and Conditions located at https://www.singlecare.com/terms-and-conditions.</p>
          </Grid>
          <Grid item container direction={"column"} justifyContent={"center"} alignItems={"flex-end"}>
            <Grid item>
                <img
                  src="sc-logo-white.svg"
                  height="23"
                  alt="MDB Logo"
                  loading="lazy"
                />
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}

      <Backdrop
        sx={{ color: '#fff', zIndex: 2 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}