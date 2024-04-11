import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
    TextareaAutosize,
    Typography,
  } from '@mui/material';
  import React, { useState } from 'react';
  import './form.scss';
  import { useForm, Controller } from 'react-hook-form';
  import { useNavigate } from 'react-router';
import { postValues } from '../../Utils/Services/services';
  
  export const Form = () => {
  const navigate=useNavigate();
  
    const {
      register,
      handleSubmit,
      control,
      formState: { errors },
    } = useForm({
      // resolver: yupResolver(schema),
    });
    const [formData, setFormData] = useState({
      title: '',
      label: '',
      release_date: '',
      overview: '',
      director: '',
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSsxGyiyhNtgJgZkEeIlnnZHA96MTEc0CoTg&usqp=CAU',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
  
  
    const handlePost = (data) => {
      console.log(formData);
      const postResponse = postValues(formData);
      console.log(postResponse);
  
      setFormData({
        title: '',
        label: '',
        release_date: '',
        overview: '',
        director: '',
        poster:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSsxGyiyhNtgJgZkEeIlnnZHA96MTEc0CoTg&usqp=CAU',
      });
  
      setTimeout(() => {
        navigate('/home')
      }, 1000);
    };
  
    return (
      <div className="form_banner">
        <Typography
          className="form_banner-main-text"
          variant="body"
          component="span"
        >
          Create New
        </Typography>
        <div className="form_banner-page-type">
          <Typography
            variant="body"
            component="span"
            className="form_banner-page-type-text"
          >
            What would you like to create?
          </Typography>
          <FormControl>
            <RadioGroup
              className="form_banner-page-type-radio-buttons"
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                className="form_banner-page-type-radio-buttons-single-radio"
                value="PortalPage"
                control={<Radio />}
                label="Portal Page"
              />
              <FormControlLabel
                className="form_banner-page-type-radio-buttons-single-radio"
                value="Template"
                control={<Radio />}
                label="Template"
              />
            </RadioGroup>
          </FormControl>
        </div>
  
        <div className="form_banner-existingPages">
          <Typography
            variant="body"
            component="span"
            className="form_banner-existingPages-text"
          >
            How Would you like to Create?
          </Typography>
  
          <RadioGroup
            className="form_banner-existingPages-radio-buttons"
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              className="form_banner-existingPages-radio-buttons-single-radio"
              value="FromScratch"
              control={<Radio />}
              label="From Scratch"
            />
            <FormControlLabel
              className="form_banner-existingPages-radio-buttons-single-radio"
              value="ExistingPortalPages"
              control={<Radio />}
              label="Existing Portal Pages"
            />
            <FormControlLabel
              className="form_banner-existingPages-radio-buttons-single-radio"
              value="ExistingTemplate"
              control={<Radio />}
              label="Existing Template"
            />
          </RadioGroup>
        </div>
  
        <form onSubmit={handleSubmit(handlePost)}>
          <div className="form_banner-Inputs-section">
            <Typography
              className="form_banner-Inputs-section-text"
              variant="body"
              component="span"
            >
              Financial Health Tracker
            </Typography>
  
            <div className="form_banner-Inputs-section-twoInputs">
              <div>
                <InputLabel
                  id="demo-simple-select-label"
                  className="form_banner-Inputs-section-twoInputs-label"
                >
                  Title
                </InputLabel>
                <Controller
                  name="title"
                  control={control}
                  render={() => (
                    <TextField
                      {...register('title')}
                      value={formData.title}
                      id="outlined-basic"
                      className="form_banner-Inputs-section-twoInputs-input-field"
                      size="small"
                      onChange={handleInputChange}
                    />
                  )}
                />
              </div>
  
              <div>
                <InputLabel
                  id="demo-simple-select-label"
                  className="form_banner-Inputs-section-twoInputs-label"
                >
                  Label
                </InputLabel>
                <Controller
                  name="label"
                  control={control}
                  render={() => (
                    <TextField
                      {...register('label')}
                      value={formData.label}
                      id="outlined-basic"
                      className="form_banner-Inputs-section-twoInputs-input-field"
                      size="small"
                      onChange={handleInputChange}
                    />
                  )}
                />
              </div>
            </div>
  
            <div className="form_banner-Inputs-section-threeInputs">
              <div>
                <InputLabel
                  id="demo-simple-select-label"
                  className="form_banner-Inputs-section-threeInputs-label"
                >
                  Release date
                </InputLabel>
                <Controller
                  name="release_date"
                  control={control}
                  render={() => (
                    <TextField
                      {...register('release_date')}
                      value={formData.release_date}
                      id="outlined-basic"
                      className="form_banner-Inputs-section-threeInputs-input-field"
                      size="small"
                      onChange={handleInputChange}
                    />
                  )}
                />
              </div>
              <div>
                <InputLabel
                  id="demo-simple-select-label"
                  className="form_banner-Inputs-section-threeInputs-label"
                >
                  Director
                </InputLabel>
                <Controller
                  name="director"
                  control={control}
                  render={() => (
                    <TextField
                      {...register('director')}
                      value={formData.director}
                      id="outlined-basic"
                      className="form_banner-Inputs-section-threeInputs-input-field"
                      size="small"
                      onChange={handleInputChange}
                    />
                  )}
                />
              </div>
            </div>
            <div>
              <InputLabel
                id="demo-simple-select-label"
                className="form_banner-Inputs-section-description-label"
              >
              Description (optional)
              </InputLabel>
              <Controller
                name="overview"
                control={control}
                render={() => (
                  <TextareaAutosize
                    className="form_banner-Inputs-section-description"
                    {...register('overview')}
                    value={formData.overview}
                    minRows={8}
                    type="text"
                    onChange={handleInputChange}
                  ></TextareaAutosize>
                )}
              />
            </div>
          </div>
  
          <div className="form_banner-buttons-section">
            <Button
              variant="outlined"
              className="form_banner-buttons-section-cancel-button"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              className="form_banner-buttons-section-submit-button"
              // onClick={sub
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  };
  