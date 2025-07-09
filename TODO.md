---

## 🧠 Development Process (IDEAL Framework)

> I follow this repeatable process for every project:

### I – Interpret  
- What is the goal? → Build a simple in-memory task manager
- Who are the users? → Casual users managing simple tasks

### D – Design  
- Split logic into service & UI
- Three components: `task-list` and `task-input` and `task-list-item`
- Use Angular binding + directives

### E – Execute  
- Build feature by feature:
  - [x] Display task list using `*ngFor`
  - [x] Add task with input + `(click)`
  - [x] Delete task with `(click)`
  - [ ] (Optional) Mark as done

### A – Analyze  
- ✅ Tested add/delete logic
- ✅ Code readability checked
- ✅ Component separation is clean

### L – Level Up  
- Learned how to inject services
- Learned to separate features into modules
- Reusable service pattern for future apps

---

## ✅ Completed Features

- [ ] Task List UI
- [ ] Add Task Functionality
- [ ] Delete Task Functionality
- [ ] Basic Styling
- [ ] Mark as Done (Coming Soon)
- [ ] Edit Task (Coming Soon)

---

## 💡 Future Improvements

- Save tasks to localStorage or API
- Add authentication
- Responsive layout with Angular Material

---

## 🧠 Lessons Learned

- Angular’s separation of logic (services) and view (components) makes apps modular and scalable
- `@Injectable()` + DI pattern is powerful even in small apps
- Writing user stories first clarifies the purpose of each feature
