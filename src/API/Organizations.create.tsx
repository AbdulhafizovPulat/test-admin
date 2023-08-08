import * as React from "react";
import config from "../API/config.json";
import {
  SimpleForm,
  Create,
  useTranslate,
  Form,
  useRedirect,
  useCreate,DateInput, SelectInput, TextInput, NumberInput, useTheme
} from "react-admin";


import { Grid, Card, Button, TextField } from "@mui/material";
import { MouseEventHandler } from "react";

export const OrganizationsCompanyCreate = (props : any) => {
  interface OrgData {
    name: string;
    status: string;
    address: string;
    stir: string;
    executive: string
    phone: string;
    registeredAt: string;
    // ...
  }
  
  const redirect = useRedirect();
  const theme = useTheme() as any;
  const [create] = useCreate();
  const [orgData, setOrgData] = React.useState<OrgData | null>(null);
  const [errorData, setErrorData] = React.useState(false);
  const [validate, setValidate] = React.useState(false);

  const translate = useTranslate();

  const checkInn = (evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value);
    let inputValue = evt.target.value;
    if (inputValue.length !== 9) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  };

  const onSubmitStir = (data: any) => {
    console.log(
      data.target.parentNode.children[0].children[1].children[0].value
    );
    const stir =
      data.target.parentNode.children[0].children[1].children[0].value;
    fetch(`${config.API_URL}/organizationinfo/${stir}`)
      .then((res) => res.json())
      .then((data) => {
        setOrgData(data);
        if (data.status !== 404) {
          setOrgData(data);
        } else {
          setErrorData(true);
          setOrgData(null);
        }
      })
      .catch((err) => {
        setErrorData(true);
        console.error(err);
      });
  };
  const onSubmitCompanies = (data : any) => {
    console.log(data);
    const currentData = {
      name: data.name,
      address: data.address,
      executive: data.executive,
      phone: data.phone,
      registeredAt: data.registeredAt,
      status: data.status,
      stir: data.stir,
      thsht: data.thsht,
      dbibt: data.dbibt,
      ifut: data.ifut,
    };
    create(
      "companies",
      { data: currentData },
      {
        onSuccess: () => {
          redirect("/companies");
        },
      }
    );
  };
  return (
    <>
      <h2>{translate("resources.companies.create")}</h2>
      <Card {...props} style={{ padding: "1rem", marginTop: "1rem" }}>
        <Form>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <TextField
                style={{ marginBottom: "15px" }}
                margin="normal"
                label={translate("resources.companies.enterstir")}
                fullWidth
                variant="outlined"
                id="stir"
                onChange={(evt : any) => checkInn(evt)}
                // ref={stirRef}
              />
              {errorData && (
                <h5
                  style={{
                    marginBottom: "15px",
                    color: theme.palette.error.main,
                  }}
                >
                  { translate("resources.companies.notfound")}
                </h5>
              )}
              {validate && (
                <h5
                  style={{
                    marginBottom: "15px",
                    color: theme.palette.error.main,
                  }}
                >
                   {translate("resources.companies.wrongstir")}
                </h5>
              )}

              <Button
                onClick={onSubmitStir}
                type="submit"
                size="medium"
                variant="contained"
              >
                 {translate("resources.companies.checkcompany")}
              </Button>
              <Button
                onClick={() => {
                  setOrgData({ name: 'some name', status: 'some status', address: 'some address', stir: 'some stir', executive: 'some executive', phone: 'some phone', registeredAt: 'some registeredAt' });
                }}
                style={{ marginLeft: "15px" }}
                type="submit"
                size="medium"
                variant="outlined"
              >
                {translate("resources.companies.addnewcompany")}
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Card>
      {orgData && (
        <Create {...props} redirect="list">
          <SimpleForm onSubmit={onSubmitCompanies}>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <TextInput
                  required
                  source="name"
                  defaultValue={!orgData ? "" : orgData.name}
                  fullWidth
                />
              </Grid>
              <Grid item md={6}>
                <SelectInput
                  required
                  source="status"
                  defaultValue={!orgData ? "" : orgData.status}
                  fullWidth
                  optionText="name"
                  optionValue="id"
                  choices={[
                    {
                      id: "active",
                      name: translate("resources.companies.statusType.active"),
                    },
                    {
                      id: "undefined",
                      name: translate(
                        "resources.companies.statusType.undefined"
                      ),
                    },
                    {
                      id: "ended",
                      name: translate("resources.companies.statusType.ended"),
                    },
                  ]}
                />
              </Grid>
              <Grid item md={6}>
                <TextInput
                  required
                  source="address"
                  defaultValue={!orgData ? "" : orgData.address}
                  fullWidth
                />
              </Grid>
              <Grid item md={6}>
                <TextInput
                  required
                  source="stir"
                  defaultValue={!orgData ? "" : orgData.stir}
                  fullWidth
                />
              </Grid>
              <Grid item md={6}>
                <TextInput
                  source="executive"
                  defaultValue={!orgData ? "" : orgData.executive}
                  fullWidth
                />
              </Grid>
              <Grid item md={6}>
                <TextInput
                  required
                  source="phone"
                  defaultValue={!orgData ? "" : orgData.phone}
                  fullWidth
                />
              </Grid>
              <Grid item md={6}>
                <DateInput
                  source="registeredAt"
                  required
                  defaultValue={!orgData ? "" : orgData.registeredAt}
                  fullWidth
                />
              </Grid>

              {/* <Grid item md={6}>
                <NumberInput
                  source="thsht"
                  defaultValue={!orgData ? '' : orgData.thsht?.code}
                  fullWidth
                />
              </Grid>

              <Grid item md={6}>
                <NumberInput
                  source="dbibt"
                  defaultValue={!orgData ? '' : orgData.dbibt?.code}
                  fullWidth
                />
              </Grid>

              <Grid item md={6}>
                <NumberInput
                  source="ifut"
                  defaultValue={!orgData ? '' : orgData.ifut?.code}
                  fullWidth
                />
              </Grid> */}
            </Grid>
          </SimpleForm>
        </Create>
      )}
    </>
  );
};
