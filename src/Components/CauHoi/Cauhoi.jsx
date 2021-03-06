import React, { Component } from 'react';

import '../../styles.css';

class CauHoi extends Component {
    render() {
        return (
            <div class="sb-nav-fixed">
                <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                    <a class="navbar-brand" href="index.html">hybrid-technologies</a>
                    <button
                        class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i
                            class="fas fa-bars"></i></button>
                    <ul class="navbar-nav ml-auto mr-0 mr-md-3 my-2 my-md-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="fa fa-bell"></i>
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                <a class="dropdown-item" href="#">Settings</a><a class="dropdown-item" href="#">Activity Log</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="login.html">Logout</a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div id="layoutSidenav">

                    <div id="layoutSidenav_nav">
                    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                            <div class="sb-sidenav-menu">
                                <div class="nav">
                                    <div class="sb-sidenav-menu-heading">Trang</div>
                                    <a class="nav-link" href="/Login">
                                        <div class="sb-nav-link-icon">
                                            <i class="fas fa-tachometer-alt"></i>
                                        </div>
                                Login</a>
                                    <div class="sb-sidenav-menu-heading">Đề mục</div>

                                    <a class="nav-link" href="/DanhGiaMentor"
                                    ><div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Đánh giá Mentor</a>

                                    <a class="nav-link" href="/CauHoi"
                                    ><div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Câu hỏi</a>

                                    <a class="nav-link" href="/DanhMuc"
                                    ><div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Danh mục</a>
                                    {/* <div class="sb-sidenav-menu-heading">Interface</div>
                                    <a class="nav-link collapsed" href="/CauHoi" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts"
                                    ><div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                Câu hỏi
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div
                                        ></a>
                                    <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                        <nav class="sb-sidenav-menu-nested nav"><a class="nav-link" href="layout-static.html">Static Navigation</a><a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a></nav>
                                    </div>
                                    <a class="nav-link collapsed" href="/DanhMuc" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages"
                                    ><div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                Danh mục
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div
                                        ></a>
                                    <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                        <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth"
                                            >Authentication
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div
                                                ></a>
                                            <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                                <nav class="sb-sidenav-menu-nested nav"><a class="nav-link" href="login.html">Login</a><a class="nav-link" href="register.html">Register</a><a class="nav-link" href="password.html">Forgot Password</a></nav>
                                            </div>
                                            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError"
                                            >Error
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div
                                                ></a>
                                            <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                                <nav class="sb-sidenav-menu-nested nav"><a class="nav-link" href="401.html">401 Page</a><a class="nav-link" href="404.html">404 Page</a><a class="nav-link" href="500.html">500 Page</a></nav>
                                            </div>
                                        </nav>
                                    </div>
                                    <div class="sb-sidenav-menu-heading">Addons</div>
                                    <a class="nav-link" href="charts.html"
                                    ><div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                Charts</a
                                    ><a class="nav-link" href="tables.html"
                                    ><div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                Tables</a> */}
                                </div>
                            </div>
                            <div class="sb-sidenav-footer">
                                <div class="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                        </nav>
                    </div>
                    <div id="layoutSidenav_content">
                        <div>
                            <div class="container-fluid">
                                <h1 class="mt-4">Quản lý câu hỏi</h1>
                                <ol class="breadcrumb mt-4 mb-4">
                                    <li class="breadcrumb-item active">Nhập nội dung câu hỏi</li>
                                </ol>
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-12 col-sm-6 col-md-6">
                                                <h4>Danh mục</h4>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio" class="form-check-input" name="optradio"/>Tự nhập
                                                    </label>
                                                        <input class="form-control" type="text" name=""/>
                                                </div>
                                                        <div class="form-check">
                                                            <label class="form-check-label">
                                                                <input type="radio" class="form-check-input" name="optradio"/>Chọn sẵn
                                                             </label>
                                                                
                                                                    <select class="form-control" id="sel1">
                                                                        <option>Danh mục có sẵn</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                    </select>
                                                         </div>
                                </div>
                                                            <div class="col-12 col-sm-6 col-md-6">
                                                                <h4>Mục đánh giá</h4>
                                                                
                                                                    <div class="form-check">
                                                                        <input class="form-control" type="text" name=""/> </div>
                                                                        
                                                                            <div class="form-check">
                                                                                <select class="form-control" id="sel1">
                                                                                    <option>Mục đánh giá có sẵn</option>
                                                                                    <option>2</option>
                                                                                    <option>3</option>
                                                                                    <option>4</option>
                                                                                </select>
                                                                            </div>
                                </div>
                                                                    </div>
                                                    </div>
                                                            </div>

                                                            <div class="card mb-4">
                                                                <div class="card-body">
                                                                    <div class="table-responsive">
                                                                        <div class="table-responsive">
                                                                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Thanh điểm</th>
                                                                                        <th>Nội dung tiêu chuẩn</th>
                                                                                        <th>Teamplate</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>1</td>
                                                                                        <td>System Architect</td>
                                                                                        <td>
                                                                                            <button class="btn btn-primary">Chọn mẫu</button>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>2</td>
                                                                                        <td>Accountant</td>
                                                                                        <td><button class="btn btn-primary">Chọn mẫu</button></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                            <ul class="btn-Save">
                                                                                <li>
                                                                                    <button class="btn btn-primary">Thêm mới</button>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
            
                                                    
                                                    <footer class="py-4 bg-light mt-auto">
                                                        <div class="container-fluid">
                                                            <div class="d-flex align-items-center justify-content-between small">
                                                                <div class="text-muted">Copyright &copy; 2020</div>
                                                                <div>
                                                                    <a href="#">Privacy Policy</a>
                            &middot;
                            <a href="#">Terms &amp; Conditions</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </footer>
                                                </div>
                                            </div>

                                        </div>
                                        </div>
    )
  }
}

export default CauHoi;