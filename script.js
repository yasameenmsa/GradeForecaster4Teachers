// انتظر حتى يتم تحميل الصفحة بالكامل
document.addEventListener("DOMContentLoaded", function() {
    // الحصول على المراجع الخاصة بالنموذج والنافذة المنبثقة
    const dataForm = document.getElementById("data-form");
    const overlay = document.getElementById("overlay");
    const closePopupButton = document.getElementById("close-popup");
 
    // تنفيذ الأكشن عند إرسال النموذج
    dataForm.addEventListener("submit", function(event) {
       // منع إعادة تحميل الصفحة
       event.preventDefault();
 
       // جمع قيم الحقول من النموذج
       const studentName = document.getElementById("student-name").value;
       const school = document.getElementById("school").value;
       const sex = document.getElementById("sex").value;
       const age = parseInt(document.getElementById("age").value);
       const address = document.getElementById("address").value;
       const famsize = document.getElementById("famsize").value;
       const Pstatus = document.getElementById("Pstatus").value;
       const Medu = parseInt(document.getElementById("Medu").value);
       const Fedu = parseInt(document.getElementById("Fedu").value);
       const Mjob = document.getElementById("Mjob").value;
       const Fjob = document.getElementById("Fjob").value;
       const reason = document.getElementById("reason").value;
       const guardian = document.getElementById("guardian").value;
       const traveltime = parseInt(document.getElementById("traveltime").value);
       const studytime = parseInt(document.getElementById("studytime").value);
       const failures = parseInt(document.getElementById("failures").value);
       const schoolsup = document.getElementById("schoolsup").value;
       const famsup = document.getElementById("famsup").value;
       const paid = document.getElementById("paid").value;
       const activities = document.getElementById("activities").value;
       const nursery = document.getElementById("nursery").value;
       const higher = document.getElementById("higher").value;
       const internet = document.getElementById("internet").value;
       const romantic = document.getElementById("romantic").value;
       const famrel = parseInt(document.getElementById("famrel").value);
       const freetime = parseInt(document.getElementById("freetime").value);
       const goout = parseInt(document.getElementById("goout").value);
       const Dalc = parseInt(document.getElementById("Dalc").value);
       const Walc = parseInt(document.getElementById("Walc").value);
       const health = parseInt(document.getElementById("health").value);
       const absences = parseInt(document.getElementById("absences").value);
       const G1 = parseInt(document.getElementById("G1").value);
       const G2 = parseInt(document.getElementById("G2").value);
       const G3 = parseInt(document.getElementById("G3").value);
 
       // إنشاء صف جديد في الجدول وملءه بالبيانات
       const dataTable = document.getElementById("data-table");
       const newRow = dataTable.insertRow(-1); // -1 لإضافته في النهاية
 
       const cells = [
          studentName, school, sex, age, address, famsize, Pstatus,
          Medu, Fedu, Mjob, Fjob, reason, guardian, traveltime,
          studytime, failures, schoolsup, famsup, paid, activities,
          nursery, higher, internet, romantic, famrel, freetime,
          goout, Dalc, Walc, health, absences, G1, G2, G3
       ];
 
       // إضافة القيم إلى الصف
       cells.forEach((cellValue, index) => {
          const cell = newRow.insertCell(index);
          cell.textContent = cellValue;
       });
 
       // إغلاق النافذة المنبثقة بعد إضافة البيانات
       overlay.style.display = "none";
    });
 
    // إغلاق النافذة المنبثقة عند النقر على الزر "Close"
    closePopupButton.addEventListener("click", function() {
       overlay.style.display = "none";
    });
 
    // عرض النافذة المنبثقة عند النقر على زر "Add Student Data"
    const addDataButton = document.getElementById("add-data-button");
    addDataButton.addEventListener("click", function() {
       overlay.style.display = "block";
    });
 });
 