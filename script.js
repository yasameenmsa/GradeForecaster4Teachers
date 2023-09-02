// انتظر حتى يتم تحميل الصفحة بالكامل
document.addEventListener("DOMContentLoaded", function() {
   // الحصول على المراجع الخاصة بالنموذج والنافذة المنبثقة
   const overlay = document.getElementById("overlay");
   const dataForm = document.getElementById("data-form");
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




/////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {

// Get references to the HTML elements
const fileInput = document.getElementById("file-input");
const uploadButton = document.getElementById("upload-button");

// Add an event listener to the upload button
uploadButton.addEventListener("click", function () {
    // Trigger the hidden file input to open the file dialog
    fileInput.click();
});

// Add an event listener to the file input to handle the selected file
fileInput.addEventListener("change", function () {
    // Get the selected file
    const selectedFile = fileInput.files[0];

    if (selectedFile) {
        // Handle the selected file here, for example, you can read it with FileReader
        const fileReader = new FileReader();
        fileReader.onload = function (e) {
            // e.target.result contains the contents of the uploaded file
            const fileContents = e.target.result;
            // You can process the file contents here, e.g., parse it as Excel
            // For Excel processing, you might want to use a library like XLSX.js
            // Example: const workbook = XLSX.read(fileContents, { type: "binary" });
            // Now, you can work with the 'workbook' object to extract data from the Excel file
            // Once you've processed the file, you can display the results or perform any other actions
        };
        // Read the file as binary data
        fileReader.readAsBinaryString(selectedFile);
    }
});

});

   // ////////////////
   // انتظر حتى يتم تحميل الصفحة بالكامل
   document.addEventListener("DOMContentLoaded", function() {
      // احصل على مرجع للزر
      const downloadButton = document.getElementById("Download-data-button");

      // اضف مستمع للزر لعند الضغط عليه
      downloadButton.addEventListener("click", function() {
         // جعل المصفوفة فارغة
         const data = [];

         // المصفوفة الرئيسية تحتوي على البيانات (بدون العناوين)
         const dataWithoutHeaders = [
            ["GP", "F", 18, "U", "GT3", "A", 4, 4, "at_home", "teacher", "course", "mother", 2, 2, 0, "yes", "no", "no", "no", "yes", "yes", "no", "no", 4, 3, 4, 1, 1, 3, 6, 5, 6, 6],
            ["GP", "F", 17, "U", "GT3", "T", 1, 1, "at_home", "other", "course", "father", 1, 2, 0, "no", "yes", "no", "no", "no", "yes", "yes", "no", 5, 3, 3, 1, 1, 3, 4, 5, 5, 6]
            // يمكنك إضافة المزيد من البيانات هنا
         ];

         // المصفوفة التي تحتوي على العناوين
         const dataHeaders = [
            ["school", "sex", "age", "address", "famsize", "Pstatus", "Medu", "Fedu", "Mjob", "Fjob", "reason", "guardian", "traveltime", "studytime", "failures", "schoolsup", "famsup", "paid", "activities", "nursery", "higher", "internet", "romantic", "famrel", "freetime", "goout", "Dalc", "Walc", "health", "absences", "G1", "G2", "G3"]
         ];

         // دمج العناوين مع البيانات
         const dataWithHeaders = [dataHeaders[0], ...dataWithoutHeaders];

         // تحويل المصفوفة إلى ورقة Excel
         const ws = XLSX.utils.json_to_sheet(dataWithHeaders);

         // إنشاء ملف Excel
         const wb = XLSX.utils.book_new();
         XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

         // تصدير الملف إلى ملف Excel
         XLSX.writeFile(wb, "data-templete.xlsx");
      });
            // حذف الصف الأول من المصفوفة (الذي يحتوي على الأرقام)
         data.shift();

         // تحويل المصفوفة إلى ورقة Excel
         const ws = XLSX.utils.json_to_sheet(data);

         // إنشاء ملف Excel
         const wb = XLSX.utils.book_new();
         XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

         // تصدير الملف إلى ملف Excel
         XLSX.writeFile(wb, "data.xlsx");

   });
