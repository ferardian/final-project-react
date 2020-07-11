import React from 'react';
import { Button, FormLabel, Form, FormControl, FormGroup } from 'react-bootstrap';

// Form untuk melakukan input data yang kemudian akan di proses untuk menghasilkan respon dari API

const LocationForm = (props) =>
  <div className="weatherApp">
    <Form onSubmit={props.fetchDataSubmit}>
      <FormGroup validationstate="success">
        <div className="form">
          <FormLabel>Masukkan Lokasi Pada Kolom Berikut :
            <FormControl
              type="text"
              name="location"
              id="location"
              placeholder={"Ketik Alamat, Kota, Provinsi, Kode Pos, atau Negara."}
              autoComplete="on"
              value={props.location}
              onChange={props.changeLocationSubmit}
            />
          </FormLabel>
        </div>
        <div className="submit">
          <Button
            id="submit"
            type="submit"
            bsstyle="primary"
            disabled={props.disabled} 
            active>
            <span className = "button-text">
              Cek Cuaca
            </span>
          </Button>
        </div>
      </FormGroup>
    </Form>
  </div>

  export default LocationForm;
