import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cross from "../../../../Assets/Icons/close.png";
import Edit from "../../../../Assets/Icons/editing.png";
import deleteCategoryById from "../../../../api/category.api";
import getAllCategories from "../../../../api/getCategory";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
// import "../../../../Assets/styles/UserForm.scss";
function TVCategory() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [eventId, setEventId] = useState();

  const handleClickOpen = (id) => {
    setOpen(true);
    setEventId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleButtonClick = (id) => {
    navigate(`/admin/Tv_category/edit_category/${id}`);
  };
  const handleCreateButtonClick = () => {
    navigate("/admin/tv_category/add_category");
  };

  const [data, setData] = useState();
  const getData = async () => {
    const { data: response } = await getAllCategories();
    setData(response.categories);
  };
  const deleteCategory = async (id) => {
    await deleteCategoryById(eventId);
    getData();
    setOpen(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div
        style={{
          background: "black",
          position: "absolute",
          // left: "10%",
          width: "100%",
          height: "100%",
          overflowX: "hidden",
          margin: "auto",
        }}
      >
        <div className=" ml-5 mt-20 ">
          <div
            className="w-[82vw] box edit-con bg-[#1C1C1E] mx-auto rounded p-5"
            style={{ position: "absolute", left: "16%" }}
          >
            <div class="relative overflow-x-auto shadow-md edit-contain">
              <div class="relative mt-1">
                <div class=" flex items-center  ">
                  <button
                    className="w-[125px] h-[4vh] bg-[#0EAC5C] Add-tv font-medium rounded-md flex items-center justify-evenly"
                    onClick={handleCreateButtonClick}
                  >
                    <svg
                      fill="#FFFFFF"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" />
                    </svg>
                    <span className="text-white text-sm dark:text-white">
                      Add Category
                    </span>
                  </button>
                </div>
              </div>

              <table class="w-full mt-5 text-sm text-left rtl:text-right text-white">
                <thead class=" w-[78vw] text-xs   text-white">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-white text-md"
                      style={{ border: "1px solid #313133" }}
                    >
                      Category Name
                    </th>

                    <th
                      scope="col"
                      class="px-6 py-3 text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((cat) => (
                    <tr key={cat._id}>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium  whitespace-nowrap text-white"
                        style={{ border: "1px solid #313133" }}
                      >
                        {cat.name}
                      </th>
                      <td
                        class="px-6 py-4 dark:text-white"
                        style={{ border: "1px solid #313133" }}
                      >
                        <div
                          className={`bg-[${
                            cat.status == "active" ? "#0EAC5C" : "#ac0e28"
                          }] w-[60px] text-center  text-white rounded text-sm`}
                        >
                          {cat.status == "active" ? "Active" : "Inactive"}
                        </div>
                      </td>
                      <td
                        class="px-6 py-4 dark:text-white "
                        style={{ border: "1px solid #313133" }}
                      >
                        <div className="flex">
                          <button
                            className="  relative w-[36px] h-[33px] rounded z-10 bg-[#10C469] hover:before:absolute hover:before:bg-black hover:before:content-['Edit'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full  hover:before:mt-[-18px]"
                            onClick={() => handleButtonClick(cat._id)}
                          >
                            <img
                              src={Edit}
                              alt=""
                              className="w-[16px] h-[16px] m-auto"
                            />
                          </button>
                          <>
                            <button
                              variant="outlined"
                              onClick={() => {
                                handleClickOpen(cat._id);
                              }}
                              className="ml-3  w-[36px] h-[33px] rounded relative z-10 bg-[#FF5B5B] hover:before:absolute hover:before:bg-black hover:before:content-['Remove'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full hover:before:mt-[-18px]"
                            >
                              <img
                                src={Cross}
                                alt=""
                                className="w-[10px] h-[10px] m-auto"
                              />
                            </button>
                          </>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Are you sure you want to delete this?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => deleteCategory()} autoFocus>
                      Delete
                    </Button>
                  </DialogActions>
                </Dialog>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TVCategory;
